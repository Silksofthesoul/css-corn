const removeProperty = (prop: string): object => ({ [prop]: _, ...object }): object => object;

interface CssParams {
  id: string
}

export class Css {
  styles: object;
  id: string;
  domStyle: HTMLElement | null;

  constructor(_params?: CssParams) {
    const params: CssParams = {
      id: 'superstyle',
      ..._params
    };
    this.styles = {};
    this.id = params.id;
    let old = [...document.querySelectorAll('#' + this.id)];
    old.forEach(item => {
      let parent: (Node & ParentNode) | null = item.parentNode;
      parent ?.removeChild(item);
    });
    this.domStyle = document.createElement('style');
    this.domStyle.id = this.id;
    this.domStyle.setAttribute('type', 'text/css');
    document.head.appendChild(this.domStyle);
  }

  parse(styles: string): object {
    return styles
      .split(';')
      .map(item => {
        let arr = item.split(':');
        return arr
          .map(itm => itm ? itm.trim() : false)
          .filter(itm => itm);
      })
      // // WARNING: WTF?
      .reduce((stl: object, current: (string | false)[]) => {
        if (current && current[1] && current[0]) stl[current[0]] = current[1];
        return stl;
      }, {});
  }

  stringify(obj: object): string {
    return Object.entries(obj)
      .map(item => [item[0], item[1]].join(':'))
      .join(';') + ';';
  }

  getStyle(params: string): object { return this.parse(params); }

  add(selector: string, params: string): Css {
    let styles = this.getStyle(params);
    this.styles[selector] = { ...this.styles[selector], ...styles };
    return this;
  }

  del(selector: string, params: string = ''): Css {
    if (!params) {
      this.styles = removeProperty(selector)(this.styles);
    } else {
      let stArr = params.split(/[\s;,\/]/igm).filter(item => item.trim());
      stArr.forEach(item => {
        this.styles[selector] = removeProperty(item)(this.styles[selector])
      });
    }
    return this;
  }

  rename(selector: string, params: string = '') {
    console.log(selector, params);
  }

  render(): Css {
    const en = (o: object) => Object.entries(o);
    const res: string = en(this.styles)
      .map(
        item => `${item[0]}{${en(item[1])
          .map(itm => itm.join(':'))
          .join(';')};}`
      ).join('');
    this.domStyle.innerText = res;
    return this;
  }
};
window.$Css = Css;
export default Css;
