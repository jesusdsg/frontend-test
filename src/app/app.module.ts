import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './components/frontend/frontend.component';
import { MainComponent } from './components/frontend/main/main.component';
import { AboutComponent } from './components/frontend/about/about.component';
import { ServicesComponent } from './components/frontend/services/services.component';
import { TeamComponent } from './components/frontend/team/team.component';
import { InfoComponent } from './components/frontend/info/info.component';
import { FooterComponent } from './components/frontend/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    MainComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    InfoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
