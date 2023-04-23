import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SeriesService } from './series/series.service';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
