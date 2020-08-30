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
    element1: HTMLInputElement;
   
    render():HTMLElement{
       return this.createInput();
    }

    getValue(): string{   
       if(this.element.checked){
           return this.element.value
       }else if(this.element1.checked){
           return this.element1.value
       }
    }

    createInput(){
       
        this.label = new FieldLabel;
        this.labelV = this.label.labelShow(this.name);
        
        let label = document.createElement("label");
        label.innerHTML = "Yes"
        this.element = document.createElement("input");
        this.element.type = "radio";
        this.element.name = this.name;
        this.element.id = "yes";
        this.element.value = "Yes";
        this.element.value = this.value;  
        
        let label1 = document.createElement("label");
        label1.innerHTML = "No";
        this.element1 = document.createElement("input");
        this.element1.type = "radio";
        this.element1.name = this.name;
        this.element1.id = "no";
        this.element1.value = "No";
        this.element1.value = this.value;  

        let l = document.createElement("div");
        l.setAttribute("name", this.name);
        l.appendChild(this.labelV);
        l.appendChild(label);
        l.appendChild(this.element)
        l.appendChild(label1);
        l.appendChild(this.element1)

        return l;
    }

    constructor(name: string){
        this.name = name;

    }
    
}