import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path:'About',
    component:AboutusComponent
  },
  {
    path:'Services',
    component:ServicesComponent
  },
  {
    path:'Teams',
    component:TeamsComponent
  },
  {
    path:'Portfolio',
    component:PortfolioComponent
  },
  {
    path:'Contact',
    component:ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
