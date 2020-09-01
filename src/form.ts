import {InputField} from '../src/Components/InputField';
import {TextAreaField} from '../src/Components/TextAreaField';
import {DateField} from '../src/Components/DateField';
import {EmailField} from '../src/Components/EmailField';
import {SelectField} from '../src/Components/SelectField';
import {CheckboxField} from '../src/Components/CheckboxField';
import {TSMap} from 'typescript-map'
import {Field} from '../src/Components/Field';
import { LocStorage } from './locStorage';

export class Form {
     fieldsArray : Field[] = [new DateField("Data formularza") ,new InputField("Imię"), new InputField("Nazwisko"), new EmailField("Email"), new SelectField("Wybrany kierunek studiów" , ["Informatyka", "Ekonometria", "Zarządzanie"]), new CheckboxField("Czy Preferujesz e-learning?"),new TextAreaField("Uwagi")];

       render(): any{
        
          const main = document.getElementById("main");
          
          const back_btn = document.createElement("button");
          back_btn.setAttribute("id", "back");
          back_btn.innerHTML = "Back"
          
          const save_btn = document.createElement("button");
          save_btn.setAttribute("id", "save");
          save_btn.innerHTML = "Save"

           for(let i = 0; i < this.fieldsArray.length; i++){                                         
         
              main.appendChild(this.fieldsArray[i].render());
              main.appendChild(back_btn);
              main.appendChild(save_btn);
              
          }
          
      }
     
       getValue() : string {
         let map = new TSMap();

         this.fieldsArray.forEach(element => {
             map.set(element.name,element.getValue())
         });
        
         return JSON.stringify(map);
      }

      save(){
        let loc = new LocStorage();
        loc.saveDocument(this.getValue());
        window.location.href = "index.html";
       }
}