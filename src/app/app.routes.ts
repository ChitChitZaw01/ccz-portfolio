import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceAndEducationComponent } from './experience-and-education/experience-and-education.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experience', component: ExperienceAndEducationComponent }];

