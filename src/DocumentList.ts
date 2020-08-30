import { Guid } from "guid-typescript";
import { TSMap } from "typescript-map"
import { LocStorage } from './locStorage'

export class DocumentList{

    documents : Map<string,string>;
 
    getDocumentList() {
        
        let loc = new LocStorage();
        let arr = loc.getDocuments();
 
        let map = new Map<string,string>();
        arr.forEach(key => {
            if(Guid.isGuid(key))
                map.set(key, localStorage.getItem(key));
        });
 
        this.documents = map;
    }

     removeDocument(id : string) {
         localStorage.removeItem(id);
         window.self.location.href = "/document-list.html";
     }

    getDocument(id : string) {
        return JSON.parse(localStorage.getItem(id));
    }


    render(){
        
        this.getDocumentList();
        let res = "";

        this.documents.forEach((value,key) => {
            let Json = JSON.parse(JSON.parse(value));
            let head = "";
            let body = "";

        
             let button = document.createElement("input");
             button.type = "submit";
             button.value = "Usuń";
             button.setAttribute("data-id", key);


             button.addEventListener("click", () => {
                 
                let id =  button.getAttribute("data-id") 
                this.removeDocument(id);
             })

            Object.keys(Json).forEach(function(k){
                head += "<th>" + k + "</th>" ;
                body += "<td>" + Json[k] +  "</td>" ;
            });

            let str = "<a href='edit-document.html?id="+key+"'>Edytuj</a><table id='"+key+"'><tr><th>id</th>"+ head + "</tr><tr><td>"+
            key+"</td>"+ body + "</tr></table>"
                res += str;
                
            document.getElementById("documents").innerHTML = res;
            document.getElementById(key).appendChild(button);

            });
        
        

    }
}
