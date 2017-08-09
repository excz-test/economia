import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriaComponent } from './components/categoria.component';
import { NavComponent } from './nav/nav.component';
//import {MessagesModule} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';
import {ButtonModule, PasswordModule, DataTableModule ,SharedModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //MessagesModule
    GrowlModule,
    ButtonModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
