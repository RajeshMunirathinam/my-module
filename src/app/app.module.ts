import { clientRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DinoComponent } from './components/dino/dino.component';

@NgModule({
  declarations: [
    AppComponent,
    DinoComponent
  ],
  imports: [
    BrowserModule,
    clientRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
