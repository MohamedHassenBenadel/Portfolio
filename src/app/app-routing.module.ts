import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: 'navbar',component: NavbarComponent},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'experience', component: ExperienceComponent },
  {path: 'skills',component: SkillsComponent},
  {path: 'projects',component: ProjectsComponent},
  {path: 'contacts',component: ContactsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
