import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component'
import {HttpClientModule} from "@angular/common/http";
import { MainComponent } from './shared/components/main/main.component';
import { WeatherShortInfoComponent } from './shared/components/weather-short-info/weather-short-info.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'main', component: MainComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    WeatherShortInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
