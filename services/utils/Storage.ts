class Storage{
    save(key:string, data: any){
        localStorage.setItem(key, JSON.stringify(data))
    }
    get(key:string){
       const data = localStorage.getItem(key);
       return JSON.parse(String(data));
    }
}

const storage = new Storage();

export default storage;