import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { TMNTService } from './services/tmnt.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Grid1Component } from './grid1/grid1.component';
import { Grid2Component } from './grid2/grid2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Grid1Component,
    Grid2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TMNTService],
  bootstrap: [AppComponent]
})
export class AppModule { }
