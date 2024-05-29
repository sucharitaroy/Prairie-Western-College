import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FinancialAidComponent } from './pages/financial-aid/financial-aid.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EventComponent } from './pages/event/event.component';
import { ApplyFromComponent } from './pages/apply-from/apply-from.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExistingProgramsComponent } from './pages/existing-programs/existing-programs.component';
import { UpcomingprogramsComponent } from './pages/upcomingprograms/upcomingprograms.component';
import { AdmissionsComponent } from './pages/admissions/admissions.component';
import { InternationaladmissionsComponent } from './pages/internationaladmissions/internationaladmissions.component';
import { CoursedetailsComponent } from './pages/coursedetails/coursedetails.component';
import { FaqComponent } from './pages/faq/faq.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    FinancialAidComponent,
    BlogComponent,
    EventComponent,
    ApplyFromComponent,
    ContactComponent,
    ExistingProgramsComponent,
    UpcomingprogramsComponent,
    AdmissionsComponent,
    InternationaladmissionsComponent,
    CoursedetailsComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
