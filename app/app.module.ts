import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { PeopleComponent }   from './people.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,PeopleComponent ],
  bootstrap:    [ AppComponent,PeopleComponent ]
})
export class AppModule { }

