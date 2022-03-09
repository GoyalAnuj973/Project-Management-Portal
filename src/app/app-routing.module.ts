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
        component: CreateIssueComponent
      },
      {
        path: 'create-project',
        component: CreateProjectComponent
      },
      {
        path: 'view-insights/:id',
        component: ViewInsightsComponent
      },
      {
        path: 'issue-details/:id',
        component: IssueDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
