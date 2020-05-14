import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core-components/header/header.component';
import { FooterComponent } from './core-components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NavigComponent } from './components/navig/navig.component';
import { BannerComponent } from './components/banner/banner.component';
import { ScrollTpComponent } from './components/scroll-tp/scroll-tp.component';

@NgModule({
  declarations: [
    AppComponent,       
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    TeamsComponent,
    PortfolioComponent,
    NavigComponent,
    BannerComponent,
    ScrollTpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
