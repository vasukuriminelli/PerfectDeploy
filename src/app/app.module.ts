import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatashareComponent } from './datashare/datashare.component';
import { Datashare1Component } from './datashare1/datashare1.component';
import { ChildcompComponent } from './childcomp/childcomp.component';
import { ServiceExCompoComponent } from './service-ex-compo/service-ex-compo.component';
import { CustomPipe } from './custom.pipe';
import { CustompipesPipe } from './custompipes.pipe';
import { ConditionbasedpipesexamplePipe } from './conditionbasedpipesexample.pipe';
import { DiComponentexComponent } from './di-componentex/di-componentex.component';
import { DataService } from './shared/data.service';
import { ExcompoComponent } from './excompo/excompo.component';
import {ExService} from './shared/ex.service';
import { RouterModule,Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import {HttpClientModule} from '@angular/common/http';
import { GetcompoexComponent } from './getcompoex/getcompoex.component';
import { ObservablecompoComponent } from './observablecompo/observablecompo.component';
import { TodoformComponent } from './todoform/todoform.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import { HiComponent } from './components/hi/hi.component';

const vasu:Routes=[


  /*{
    path:'**',component:PageNotFoundComponent
  },

NOTE1:
       IF YOU WRITE THIS PATH BEFORE ANY PATH CAN BE DEFIENND THEN YOU WILL GET PAGE NOT FOUND WHY BCZ ** TAKES  ANY VALUES AS A 
       INPUT SO WT EVER THE PATH YOU IT SIMPLEY MATCHES THE FIRST ** PAGE THHEN IT RESULTANT IT GIVES PAGE NOT FOUND EXECPTION.
       
NOTE2:       
      WT EVER THE PATHS OF THE ORDER YOU GIVE IN THIS ARRAY  THE APPLICATION TAKES THE PATHS ACCORDINGLY 
*/


  {
    path:'',component:HomeComponent
  },

  {
    path:'about',component:AboutComponent
  },

  {
    path:'contact',component:ContactComponent
  },

  {
    path:'**',component:PageNotFoundComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DatashareComponent,
    Datashare1Component,
    ChildcompComponent,
    ServiceExCompoComponent,
    CustomPipe,
    CustompipesPipe,
    ConditionbasedpipesexamplePipe,
    DiComponentexComponent,
    ExcompoComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    MainHeaderComponent,
    GetcompoexComponent,
    ObservablecompoComponent,
    TodoformComponent,
    TodolistComponent,
    HiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(vasu),
    HttpClientModule
  ],
  providers: [DataService,ExService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
