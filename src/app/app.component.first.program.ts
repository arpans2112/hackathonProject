import { Component } from '@angular/core';

@Component({
  selector: 'my-app1',
  templateUrl: './app.component_firstpage.html'
})
export class AppComponentFirstProgram  { 
  appTitle: string = 'Welcome';
  appStatus: boolean = false;

  appList: any[] = [ {
    "ID": "1",
    "Name" : "One"
 },

 {
    "ID": "2",
    "Name" : "Two"
 } ];
}