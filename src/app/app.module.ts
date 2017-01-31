import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';*/

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.servise';
import {AppRoutingModule} from './app-routing.model';
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
