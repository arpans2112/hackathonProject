import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { AppComponentFirstProgram }  from './app.component.first.program';
import { RxRenewalHomeFormComponent } from './rxRenewal/rxRenewalHome-form.component';
import { FormsModule } from '@angular/forms';


@NgModule ({
  imports: [ BrowserModule,HttpModule,FormsModule],
  declarations: [RxRenewalHomeFormComponent],
  bootstrap: [ RxRenewalHomeFormComponent ]
})

export class AppModule { }






