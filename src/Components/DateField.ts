import { Field } from "./Field"
import { FieldType } from "./enum"
import { FieldLabel } from "./FieldLabel"

export class DateField implements Field{
    name: string;
    label: FieldLabel;
    labelV: HTMLLabelElement;
    type = FieldType.Date;
    value: string;
    element: string
    
    render():HTMLElement{
       return this.createInput();
    }
    
    getValue(): string{   
         return this.element;
    }
    
    createInput(){
   
        var year = new Date().toISOString().slice(0,10);
        var time = new Date();
        var today = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2);

        this.label = new FieldLabel;
        this.labelV = this.label.labelShow(this.name);
        this.labelV.innerText = this.name + " " + year + " " + today;

        let l = document.createElement("div");
        l.setAttribute("name", this.name);
        l.appendChild(this.labelV);
        
        return l;
    }

    constructor(name: string){
        this.name = name;
    }
    
}