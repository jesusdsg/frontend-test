import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { DatafilterComponent } from './components/datafilter/datafilter.component';
import { MainComponent } from './components/frontend/main/main.component';
import { AboutComponent } from './components/frontend/about/about.component';
import { ServicesComponent } from './components/frontend/services/services.component';
import { TeamComponent } from './components/frontend/team/team.component';
import { InfoComponent } from './components/frontend/info/info.component';
import { FooterComponent } from './components/frontend/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    DatafilterComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    InfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
