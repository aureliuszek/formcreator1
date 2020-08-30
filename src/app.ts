import {Form} from './form';
import './style/main.scss';
import { DocumentList } from './DocumentList';
import { Router } from './Router';

class App {
    activeForm = new Form();
    documentList = new DocumentList();
}


window.onload = () => {

    let myClass = new App();
    let path = window.location.pathname;
    let page = path.split("/").pop();
    
    if(page == "new-document.html"){
        myClass.activeForm.render();

    let button = document.getElementById("save");
    let data = document.getElementById("data");
     button.addEventListener("click", () => {
        //document.getElementById("data").innerHTML = myClass.activeForm.getValue();
        myClass.activeForm.getValue();
        data.innerText =  myClass.activeForm.getValue();
        myClass.activeForm.save();

    });

    let button2 = document.getElementById("back");
    button2.addEventListener("click", () => {
         window.location.href = "index.html";
    });
    }
    
    if(page == "document-list.html"){
        myClass.documentList.render();
    }

    
    if(page == "edit-document.html"){
        let id = Router.getParm("id");
        let jsn = JSON.parse(myClass.documentList.getDocument(id));
        
        let main = document.getElementById("main");
        for(let i = 0; i <  myClass.activeForm.fieldsArray.length; i++){                                         
         
            myClass.activeForm.fieldsArray[i].value = jsn[myClass.activeForm.fieldsArray[i].name];
           
            main.appendChild(myClass.activeForm.fieldsArray[i].render());
            
        }
    }

};




