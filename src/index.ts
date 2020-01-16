declare global {
  interface Window { CssCorn: any; }
}
window.CssCorn = window.CssCorn || {};

const addProperty = (key: string, value: any, obj: object): any => ({ [key]: value, ...obj });
const removeProperty = (prop: string): any => ({ [prop]: undefined, ...obj }: any): any => obj;
const renameProperty = (oldProp: string, newProp: string, obj: any): any => removeProperty(oldProp)(addProperty(newProp, obj[oldProp], obj));
type TId = string;
type TEqual = (a: any, b: any) => boolean;

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
  _styles: IStyle,
  willRender: boolean,
}

const isType: TEqual = (val: any, type: string): boolean => typeof val === type;

export class Css {
  private _id: TId;
  private _styles: IStyle;
  private _element: HTMLElement | null;
  readonly willRender: boolean;
  constructor(_params?: ICss) {
    let __params = {
      id: '',
      styles: {},
      willRender: false,
      ..._params
    };
    const newId: string = this.idProcess(__params.id);
    if (!isType(newId, 'string')) {
      console.error(this.errorMsg('Wrong arguments property type (Id was processed)!', '$Css({id: %type%})', newId, 'string'));
      __params = removeProperty('id')(__params);
    }
    if (!isType(__params.willRender, 'boolean')) {
      console.error(this.errorMsg('Wrong arguments property type!', '$Css({willRender: %type%})', __params.willRender, 'boolean'));
      __params = removeProperty('willRender')(__params);
    }
    __params = removeProperty('styles')(__params);
    const params: ICss = {
      ...{} as ICss,
      id: 'css-corn',
      styles: <IStyle>{},
      willRender: false,
      ...__params
    };

    this._id = newId;
    this._styles = params.styles;
    this.willRender = params.willRender;

    let old: Element[] = [...document.querySelectorAll(`#${this.id}`)];
    old.forEach(item => {
      let parent: (Node & ParentNode) | null = item.parentNode;
      parent ?.removeChild(item);
    });
    this._element = document.createElement('style');
    this._element.id = this.id;
    this._element.setAttribute('type', 'text/css');
    document.head.appendChild(this._element);
  }

  public set id(id: TId) {
    const newId = this.idProcess(id);
    if (!isType(newId, 'string')) {
      console.error(this.errorMsg('Wrong property type!', '$Css.id: %type%', newId, 'string'));
    } else {
      if (this._element) this._element.id = newId;
      this._id = newId;
    }
  }
  public get id() { return this._id }

  public set styles(val: IStyle) { this._styles = val; }
  public get styles() { return this._styles }

  private idProcess(id: string): string {
    return id
      .replace(/[\s]/igm, '-')
      .replace(/[\W_]/igm, '-')
      .replace(/[-]{2,}/igm, '-')
      .replace(/^\-/igm, '')
      .replace(/\-$/igm, '');
  }
  private getWillRender(): boolean { return this.willRender; }

  private errorMsg(msg: string, key: string, val: any, type: string): string {
    const replacer = (str: string, t: string): string => str.replace(/%type%/igm, t).replace(/%.*%/igm, '')
    return `
    [ ${msg} ]\n
    [ ${replacer(key, typeof val)} = ${val} ]\n
    [ ${replacer(key, type)} ]\n
    [ Value must be ${type} ]\n`;
  }

  private parse(stylesString: string): IProperty {
    return stylesString
      .split(';')
      .map((item: string) => {
        return item.split(':')
          .map((itm: string) => itm ? itm.trim() : false)
          .filter((itm: string | boolean) => itm);
      })
      .reduce((stl: IProperty, current: any) => {
        if (current && current.length === 2 && current[0]) stl[current[0]] = current[1];
        return stl;
      }, {} as IProperty);
  }
  private stringify(obj: IStyle): string {
    return Object.entries(obj)
      .map(item => [item[0], item[1]].join(':'))
      .join(';') + ';';
  }

  private getStyle(styleString: string): IProperty { return this.parse(styleString); }

  public add(selector: string, styleString: string, willRender: boolean = this.getWillRender()): this {
    if (!isType(selector, 'string') || !isType(styleString, 'string') || !isType(willRender, 'boolean')) {
      console.error(`Wrong arguments type! $Css.add(string, string, boolean)!`);
      if (!isType(selector, 'string')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.add(SELECTOR: %type%, ..., ...)',
          selector,
          'string'
        ));
      }
      if (!isType(styleString, 'string')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.add(..., STYLESTRING: %type%, ...)',
          styleString,
          'string'
        ));
      }
      if (!isType(willRender, 'boolean')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.add(..., ..., WILLRENDER: %type%)',
          willRender,
          'boolean'
        ));
      }
      return this;
    }
    let styles = this.getStyle(styleString);
    this._styles[selector] = <IProperty>{ ...this._styles[selector], ...styles };
    if (willRender) this.render();
    return this;
  }

  del(selector: string, params: string = '', willRender: boolean = this.getWillRender()): this {
    if (!isType(selector, 'string') || !isType(params, 'string') || !isType(willRender, 'boolean')) {
      console.error(`Wrong arguments type! $Css.del(string, string, boolean)!`);
      if (!isType(selector, 'string')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.del(SELECTOR: %type%, ..., ...)',
          selector,
          'string'
        ));
      }
      if (!isType(params, 'string')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.del(..., PARAMS: %type%, ...)',
          params,
          'string'
        ));
      }
      if (!isType(willRender, 'boolean')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.del(..., ..., WILLRENDER: %type%)',
          willRender,
          'boolean'
        ));
      }
      return this;
    }
    if (!params) {
      this._styles = removeProperty(selector)(this._styles);
    } else {
      let stArr = params.split(/[\s;,\/]/igm).filter(item => item.trim());
      stArr.forEach(item => {
        this._styles[selector] = removeProperty(item)(this._styles[selector])
      });
    }
    if (willRender) this.render();
    return this;
  }

  rename(selector: string, newSelector: string = '', willRender: boolean = this.getWillRender()): this {
    if (!isType(selector, 'string') || !isType(newSelector, 'string') || !isType(willRender, 'boolean')) {
      console.error(`Wrong arguments type! $Css.rename(string, string, boolean)!`);
      if (!isType(selector, 'string')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.rename(SELECTOR: %type%, ..., ...)',
          selector,
          'string'
        ));
      }
      if (!isType(newSelector, 'string')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.rename(..., NEWSELECTOR: %type%, ...)',
          newSelector,
          'string'
        ));
      }
      if (!isType(willRender, 'boolean')) {
        console.error(this.errorMsg(
          'Wrong argument type!',
          '$Css.rename(..., ..., WILLRENDER: %type%)',
          willRender,
          'boolean'
        ));
      }
      return this;
    }
    if (this._styles[selector]) this._styles = renameProperty(selector, newSelector, this._styles);
    if (willRender) this.render();
    return this;
  }
  // TODO: add destory method
  render(): this {
    if (!this._element) {
      console.error(`DOM element <style#${this._id}> is not exist`);
      return this;
    }
    const en = (o: object) => Object.entries(o);
    const res: string = en(this._styles)
      .map(item => `${item[0]}{${this.stringify(item[1])}}`).join('');
    this._element.innerText = res;
    return this;
  }
};

window.CssCorn = Css;
export default Css;
