declare global {
    interface Window {
        CssCorn: any;
    }
}
declare type TId = string;
interface IProperty {
    [property: string]: string;
}
interface IStyle {
    [selector: string]: IProperty;
}
interface ICss {
    id: TId;
    _id: TId;
    styles: IStyle;
    _styles: IStyle;
    willRender: boolean;
}
export declare class CssCorn {
    private _id;
    private _styles;
    private _element;
    readonly willRender: boolean;
    constructor(_params?: ICss);
    set id(id: TId);
    get id(): TId;
    set styles(val: IStyle);
    get styles(): IStyle;
    private idProcess;
    private getWillRender;
    private errorMsg;
    private parse;
    private stringify;
    private getStyle;
    add(selector: string, styleString: string, willRender?: boolean): this;
    del(selector: string, params?: string, willRender?: boolean): this;
    rename(selector: string, newSelector?: string, willRender?: boolean): this;
    render(): this;
}
export default CssCorn;
