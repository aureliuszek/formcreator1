import { Field } from "./Field"
import { FieldType } from "./enum"
import { FieldLabel } from "./FieldLabel"

export class InputField implements Field{
    name: string;
    label: FieldLabel;
    labelV: HTMLLabelElement;
    type = FieldType.Input;
    value: string = "";
    element: HTMLInputElement;
    
    render() : HTMLElement{
       return this.createInput();
    }

    getValue(): string{   
        return this.element.value;
    }

    createInput(){
        
        this.label = new FieldLabel;
        this.labelV = this.label.labelShow(this.name);
        
        this.element = document.createElement("input");
        this.element.setAttribute("name", this.name) 
        this.element.value = this.value;  
        //this.element.setAttribute("id", this.name)     
        
        let l = document.createElement("div");
        l.setAttribute("name", this.name);
        l.appendChild(this.labelV);
        l.appendChild(this.element)
        
        return l;
    }

    constructor(name: string){
        this.name = name;
    }
    
}