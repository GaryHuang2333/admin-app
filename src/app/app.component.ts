import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  menus:any;

  constructor(private httpClient: HttpClient){
  }

  ngOnInit(){
    this.loadMenus();
  }

  loadMenus(){
    this.httpClient.get('/api/v1/menu').subscribe(
      menus => {
        console.log('got menu...');
        this.menus = menus;
        console.log(this.menus);
      }
    )
  }
}
