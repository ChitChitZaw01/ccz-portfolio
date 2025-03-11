import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceAndEducationComponent } from './experience-and-education/experience-and-education.component';
import { ProjectsAndSkillsComponent } from './projects-and-skills/projects-and-skills.component';

export const routes: Routes = [{ path: '', component: HomeComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'experiences', component: ExperienceAndEducationComponent },
    { path: 'projects', component: ProjectsAndSkillsComponent }];

