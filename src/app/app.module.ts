import { CardModule } from './components/card/card.module';
import { ViewInsightsModule } from './modules/view-insights/view-insights.module';
import { TeammatesModule } from './modules/teammates/teammates.module';
import { IssueDetailsModule } from './modules/issue-details/issue-details.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CreateProjectModule } from './modules/create-project/create-project.module';
import { ButtonModule } from './components/button/button.module';
import { CreateIssueModule } from './modules/create-issue/create-issue.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ButtonComponent } from './components/button/button.component';
// import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PersonComponent } from './components/person/person.component';
// import { CreateIssueComponent } from './modules/create-issue/create-issue.component';
// import { CreateProjectComponent } from './modules/create-project/create-project.component';
// import { DashboardComponent } from './modules/dashboard/dashboard.component';
// import { IssueDetailsComponent } from './modules/issue-details/issue-details.component';
// import { TeammatesComponent } from './modules/teammates/teammates.component';
// import { ViewInsightsComponent } from './modules/view-insights/view-insights.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    NavbarComponent,
    // DashboardComponent,
    // CreateProjectComponent,
    // CreateIssueComponent,
    HeaderComponent,
    // ButtonComponent,
    // CardComponent,
    // ViewInsightsComponent,
    // TeammatesComponent,
    // IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatButtonModule,
    CreateIssueModule,
    ButtonModule,
    CreateProjectModule,
    DashboardModule,
    IssueDetailsModule,
    TeammatesModule,
    ViewInsightsModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
