import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about-us', component: AboutUsComponent},
  {path:'financial-aid', component: FinancialAidComponent},
  {path:'blog', component: BlogComponent},
  {path:'event', component: EventComponent},
  {path:'apply-from', component: ApplyFromComponent},
  {path:'contact', component: ContactComponent},
  {path:'existing-programs', component: ExistingProgramsComponent},
  {path:'upcomingprograms', component: UpcomingprogramsComponent},
  {path:'admissions', component: AdmissionsComponent},
  {path:'internationaladmissions', component: InternationaladmissionsComponent},
  {path:'coursedetails', component: CoursedetailsComponent},
  {path:'faq', component: FaqComponent},
  {path:'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
