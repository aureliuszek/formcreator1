export class Router {
    
    static getParm(key:string){
        const query: string = window.location.search.substr(1);
        const urlParams = new URLSearchParams(query); 
        const id = urlParams.get(key) 
        return id;
    }
}