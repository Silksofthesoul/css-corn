const removeProperty = (prop: string): object => ({ [prop]: _, ...object }) => object;

class Css {
  styles: object;
  id: string;
  domStyle: HTMLElement | null;

  constructor() {
    this.styles = {};
    this.id = 'superstyle';
    let old = [...document.querySelectorAll('#' + this.id)];
    old.forEach(item => {
      let parent: (Node & ParentNode) | null = item.parentNode;
      parent ?.removeChild(item);
    });
    this.domStyle = document.createElement('style');
    this.domStyle.id = this.id;

    this.domStyle.setAttribute('style', 'display:block; background: red; position: fixed;font-size:1.8em;');
    document.head.setAttribute('style', 'display: block; background: red; position: fixed; top: 0; left: 0; z-index: 1111; padding: 2em;');
    this.domStyle.setAttribute('type', 'text/css');
    this.domStyle.setAttribute('contenteditable', 'true');
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
      stArr
        .forEach(item => this.styles[selector] = removeProperty(item)(this.styles[selector]));
    }
    return this;
  }

  rename(selector: string, params: string = '') {
    console.log(selector, params);
  }

  render(): Css {
    const en = (o: object) => Object.entries(o);
    const res = en(this.styles)
      .map(
        item => `${item[0]}{${en(item[1])
          .map(itm => itm.join(':'))
          .join(';')};}`
      ).join('');
    this.domStyle?.innerText = res;
    console.log('iseethelight', JSON.stringify(this.styles));
    return this;
  }
};

function* gs(i: number = 0): Generator {
  yield i++;
  yield* gs(i);
}
const g = gs();
const css: Css = new Css();

const arr = [
  () => { css.add('body', 'background: green; font-size: 2em;').render(); },
  () => { css.add('body', 'background: black; color: #fff; font-size: 6em;').render(); },
  () => { css.add('.message__title', 'transition:transform 0.25s 0s ease-out;display:block; transform:rotate(45deg);').render(); },
  () => { css.add('body', 'background: black; color: #fff; font-size: 7em;').render(); },
  () => { css.del('body').render(); },
  () => { css.del('.message__title', 'transform, transition').render(); },
  // ()=>{css.rename('.message__title', '.test > .text').render();},
];
function tp() {
  let { value } = g.next();
  if (value > arr.length - 1) return 0;
  console.log(value);
  arr[value]();
  setTimeout(tp, 100);
}
tp();
