import { clientRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DinoComponent } from './components/dino/dino.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DinoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    clientRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
