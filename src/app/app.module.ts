import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { freeApiService } from './services/freeapi.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AdministrationComponent } from './administration/administration.component';
import { NoticeComponent } from './notice/notice.component';
import { ContactComponent } from './contact/contact.component';
import { HeadComponent } from './head/head.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ServiceComponent } from './service/service.component';
import { PricingComponent } from './pricing/pricing.component';
import { MoreaboutComponent } from './moreabout/moreabout.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesComponent,
    AdministrationComponent,
    NoticeComponent,
    ContactComponent,
    HeadComponent,
    AboutComponent,
    TeamComponent,
    ServiceComponent,
    PricingComponent,
    MoreaboutComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [freeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
