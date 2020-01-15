declare global {
    interface Window { $Css: any; }
}
window.$Css = window.$Css || {};


// const removeProperty = (prop: string): object => ({ [prop]: undefined, ...object }: object): object => object;



type TId = string;
type TEqual = (a: any, b:any) => boolean;

interface IProperty {
  [property: string]: string
};

interface IStyle {
  [selector: string]: IProperty
};

// console.log(isType([1,2,3,4], 'object'));
interface ICss {
  id: TId,
  _id: TId,
  styles: IStyle,
  _styles: IStyle
}

const isType: TEqual = (val: any, type: string): boolean => typeof val === type;
isType('123', 'asd');

export class Css {
  private _id: TId;
  private _styles: IStyle;
  private _element: HTMLElement | null;

  constructor(_params?: ICss) {
    const params: ICss = {
      ...{} as ICss,
      id: 'css-corn',
      styles: <IStyle>{},
      ..._params
    };
    this._id = params.id;
    this._styles = params._styles;
    let old: Element[] = [...document.querySelectorAll(`#${this.id}`)];
    old.forEach(item => {
      let parent: (Node & ParentNode) | null = item.parentNode;
      parent?.removeChild(item);
    });
    this._element = document.createElement('style');
    this._element.id = this.id;
    this._element.setAttribute('type', 'text/css');
    document.head.appendChild(this._element);
  }

  public set id(id: TId) {
    if(this._element) this._element.id = id;
    this._id = id;
  }
  public get id() { return this._id }

  public set styles(val: IStyle) { this._styles = val; }
  public get styles() { return this._styles }


  private parse(styles: string): IStyle {
    return styles
      .split(';')
      .map(item => {
        let arr = item.split(':');
        return arr
          .map(itm => itm ? itm.trim() : false)
          .filter(itm => itm);
      })
      .reduce((stl: IStyle, current: string[]) => {
        console.log(stl, '11');
        console.log(current, '22');
        if (current && current.length === 2 && current[0]) stl[current[0]] = current[1];
        return stl;
      }, {} as IStyle);
  }
  private stringify(obj: IStyle): string {
    return Object.entries(obj)
      .map(item => [item[0], item[1]].join(':'))
      .join(';') + ';';
  }

  private getStyle(styleString: string): IStyle { return this.parse(styleString); }

  public add(selector: string, styleString: string): this {
    let styles = this.getStyle(styleString);
    this.styles[selector] = <IStyle>{ ...this.styles[selector], ...styles };
    return this;
  }

  /*

  del(selector: string, params: string = ''): Css {
    if (!params) {
      this.styles = <ICssStyle>removeProperty(selector)(this.styles: ICssStyle);
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
    if (!this.element) {
      console.error(`DOM element <style> is not exist`);
      return this;
    }
    const en = (o: object) => Object.entries(o);
    const res: string = en(this.styles)
      .map(
        item => `${item[0]}{${en(item[1])
          .map(itm => itm.join(':'))
          .join(';')};}`
      ).join('');

    this.element.innerText = res;
    return this;
  }
  */
};

window.$Css = Css;
export default Css;

                
