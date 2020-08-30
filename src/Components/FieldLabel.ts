
export class FieldLabel{
    labelShow(text: string): HTMLLabelElement{
        var l = <HTMLLabelElement>document.createElement("label")
        l.setAttribute("for", text);
        l.innerText = text + ": ";
        return l;       
    }
}