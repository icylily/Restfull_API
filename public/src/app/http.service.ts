import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { 
    this.getTasks();
    this.getTaskById();
  }

  getTasks(){
    // let tempObservable = this._http.get('/api/tasks');
    // tempObservable.subscribe( data=>console.log("Got all tasks",data) );
    return this._http.get('/api/tasks');
  }
  getTaskById(ID:any){
    // let tempObservable = this._http.get('/api/tasks/:id');
    // tempObservable.subscribe(data => console.log("Got one tasks", data));
    return this._http.get('/api/tasks/'+ ID);

  }
}
IDBFactory