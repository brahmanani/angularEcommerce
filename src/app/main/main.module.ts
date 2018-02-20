import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../common/components/header/header.component';
import { NavbarComponent } from '../common/components/navbar/navbar.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { MainRoutes } from './main.routing';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TopbarComponent } from '../common/components/topbar/topbar.component';
import { BannerSliderComponent } from '../common/components/banner-slider/banner-slider.component';


@NgModule({
  imports: [
    CommonModule,
    MainRoutes
  ],
  declarations: [
    MainComponent, 
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    TopbarComponent,
    BannerSliderComponent
  ],
  exports:[
    PageNotFoundComponent
  ]
})
export class MainModule { }
