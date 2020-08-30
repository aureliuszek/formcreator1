import { Field } from "./Field"
import { FieldType } from "./enum"
import { FieldLabel } from "./FieldLabel"

export class SelectField implements Field{
    name: string;
    label: FieldLabel;
    labelV: HTMLLabelElement;
    options: string[];
    type = FieldType.Input;
    value: string = "";
    element: HTMLSelectElement
    
    render(): HTMLElement{
       return this.createInput();
    }

    getValue(): string{   
        return this.element.value;
    }

    createInput(){
        this.label = new FieldLabel;
        this.labelV = this.label.labelShow(this.name);

        
        this.element = document.createElement("select");
        this.element.setAttribute("name", this.name);
        
        for(let i = 0; i < this.options.length; i++){
            var option = document.createElement("option");
            this.element.appendChild(option);
            option.innerText = this.options[i];
        }

        this.element.value = this.value;  
        let l = document.createElement("div");
        l.setAttribute("name", this.name);
        l.appendChild(this.labelV);
        l.appendChild(this.element)
        
        return l;
    }

    constructor(name: string, options: string[]){
        this.name = name;
        this.options = options;
    }
}