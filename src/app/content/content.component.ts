import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  tabs = ['Home', 'Tab 1'];

  constructor() { }

  ngOnInit() {
  }

  closeTab(tab: string): void{
    console.log('close ' + tab);
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }
}
