import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'public';
  title = "Restful Tasks API";
  sub_title = "All the tasks:"
  tasks:any = [];
  constructor (private _httpService: HttpService){
    _httpService.getTasks()
    .subscribe( data =>{
      this.tasks = data;
      console.log(data);
    }

    )
  }
}
