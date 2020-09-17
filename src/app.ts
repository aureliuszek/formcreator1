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
        //data.innerText =  myClass.activeForm.getValue();
        myClass.activeForm.save();

    });

    let button2 = document.getElementById("back");
    button2.addEventListener("click", () => {
         window.location.href = "index.html";
    });
    }
    
    if(page == "document-list.html"){
        myClass.documentList.render();

        let buttons = document.querySelectorAll(".delete");
        buttons.forEach(element => {
            element.addEventListener("click",function(){
                localStorage.removeItem(this.getAttribute("data-id"));
                window.location.href="";
            })
        });

        
        let buttons2 = document.querySelectorAll(".edit");
        buttons2.forEach(element => {
            element.addEventListener("click",function(){
                let key = this.getAttribute("data-id");
                window.location.href="/edit-document.html?id="+key;
            })
        });

    }

    
    if(page == "edit-document.html"){
        let id = Router.getParam("id");
        let jsn = JSON.parse(myClass.documentList.getDocument(id));
        let main = document.getElementById("main");

        for(let i = 0; i <  myClass.activeForm.fieldsArray.length; i++){                                         
         
            myClass.activeForm.fieldsArray[i].value = jsn[myClass.activeForm.fieldsArray[i].name];
           
            main.appendChild(myClass.activeForm.fieldsArray[i].render());;
        }

        let btn = document.createElement("button");
        btn.name = "edit";
        btn.id = "edit";
        btn.innerText = "Zapisz";
        main.appendChild(btn)

        let btn2 = document.createElement("button");
        btn2.name = "back";
        btn2.id = "back";
        btn2.innerText = "Wstecz";
        main.appendChild(btn2)

        document.getElementById("edit").addEventListener("click",function() {
            let jsn = myClass.activeForm.getValue();
            localStorage.setItem(id,JSON.stringify(jsn));
            window.location.href="/edit-document.html?id="+id;
        });

        document.getElementById("back").addEventListener("click",function() {
            window.location.href="/document-list.html";
        });
    }

};




