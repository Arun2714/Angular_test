import {Routes} from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { ContactFormComponent } from './features/contact/contact.component';

export const routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component:ContactFormComponent },
  {path: 'about', component: AboutComponent},
];