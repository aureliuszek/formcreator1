import { Field } from "./Field"
import { FieldType } from "./enum"
import { FieldLabel } from "./FieldLabel"

export class CheckboxField implements Field{
    name: string;
    label: FieldLabel;
    labelV: HTMLLabelElement;
    type = FieldType.Checkbox;
    value: string = "";
    element: HTMLInputElement;
   
    render():HTMLElement{
       return this.createInput();
    }

    getValue(): string{  
        return this.element.checked + "";
    }

    createInput(){
       
        this.label = new FieldLabel;
        this.labelV = this.label.labelShow(this.name);
        
        this.element = document.createElement("input");
        this.element.type = "checkbox";
        this.element.name = this.name;   
        this.element.checked = this.value == "true" ? true : false;   

        let l = document.createElement("div");
        l.setAttribute("name", this.name);
        l.appendChild(this.labelV);
        l.appendChild(this.element);

        return l;
    }

    constructor(name: string){
        this.name = name;

    }
    
}