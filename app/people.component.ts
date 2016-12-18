import { Component } from '@angular/core';

@Component({
  selector: 'my-app2',
  template: `
    	<h1>{{title}}</h1>
    	<h2>My favorite hero is: {{myHero}}</h2>
    	<p>Heroes:</p>
    	<ul>
      		<li *ngFor="let hero of heroes">
        		{{ hero }}
     	 	</li>
    	</ul>
  	`
})
export class PeopleComponent { 
	title = 'Tour of Heroes';
  	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  	myHero = this.heroes[0];
}
