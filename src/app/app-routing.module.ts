import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateIssueComponent } from './modules/create-issue/create-issue.component';
import { CreateProjectComponent } from './modules/create-project/create-project.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { IssueDetailsComponent } from './modules/issue-details/issue-details.component';
import { ViewInsightsComponent } from './modules/view-insights/view-insights.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'project-board',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'project-board',
        component: DashboardComponent
      },
      {
        path: 'create-issue',
        loadChildren: () => import('./modules/create-issue/create-issue.module').then(mod => mod.CreateIssueModule)
      },
      {
        path: 'create-project',
        loadChildren: () => import('./modules/create-project/create-project.module').then(mod => mod.CreateProjectModule)
      },
      {
        path: 'view-insights/:id',
        loadChildren: () => import('./modules/view-insights/view-insights.module').then(mod => mod.ViewInsightsModule)
      },
      {
        path: 'issue-details/:id',
        loadChildren: () => import('./modules/issue-details/issue-details.module').then(mod => mod.IssueDetailsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
