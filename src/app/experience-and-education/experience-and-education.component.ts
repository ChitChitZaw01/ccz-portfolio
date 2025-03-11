import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-experience-and-education',
  standalone: true,
  imports: [CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    FooterComponent],
  templateUrl: './experience-and-education.component.html',
  styleUrl: './experience-and-education.component.scss'
})
export class ExperienceAndEducationComponent {
  education = [
    {
      major: 'Information Technology (IT)',
      bachelor: 'Bachelor of Engineering (BE)',
      university: 'Technological University (Mandalay)',
      description: ' ',
      image: 'assets/images/Bachelor1.png'
    }
  ];

  public experiences = [
    {
      position: 'DotNet Developer',
      company: 'Secure Link Company Limited · Full-time',
      date: 'Jun 2023 - Feb 2024 · 9 mos',
      description: `
        - Deployed and configured the system in production
        - Exported Excel report file from database
        - Developed and maintained in Web systems
        - Involved in coding at backend and frontend
        - Created in documentations such as the architecture of system of my
          development part in technical documentation and manual unit testing
        - Run tests to discover errors and optimize usability
        - Joined the team of 4 to 7 members as a developer working directly
          with a project leader
      `,
      image: 'assets/images/securelink_logo.png'
    },
    {
      position: 'Software Developer',
      company: 'TOSCO MYANMAR Co., Ltd. · Full-time',
      date: 'Dec 2019 - Mar 2023 · 3 yrs 4 mos',
      description: `
        - Developed and maintained in Web systems
        - Involved in coding at backend and frontend
        - Created in documentations such as the architecture of system of my
          development part in technical documentation and manual unit testing
        - Run tests to discover errors and optimize usability
        - Joined the team of 4 to 7 members as a developer working directly
          with a project leader
      `,
      image: 'assets/images/tosco_company_logo.png'
    }
  ];

  constructor() { }
}
