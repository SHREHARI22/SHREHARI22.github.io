import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Shrehari Guruprasad Balasubramani — Full Stack Developer',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/project-list/project-list.component').then((m) => m.ProjectListComponent),
    title: 'Projects — Shrehari Guruprasad Balasubramani',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/project-detail/project-detail.component').then((m) => m.ProjectDetailComponent),
    title: 'Project — Shrehari Guruprasad Balasubramani',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    title: 'Contact — Shrehari Guruprasad Balasubramani',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
