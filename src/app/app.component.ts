import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <app-form></app-form>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
