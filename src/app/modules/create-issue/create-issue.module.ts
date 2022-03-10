import { ButtonModule } from './../../components/button/button.module';
// import { ButtonComponent } from './../../components/button/button.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { CreateIssueComponent } from "./create-issue.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
    {
        path: '',
        component: CreateIssueComponent
    }
]

@NgModule({
    declarations: [
        CreateIssueComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatOptionModule,
        RouterModule,
        MatCardModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MatDividerModule,
        MatIconModule,
        ButtonModule,
        MatInputModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        CreateIssueComponent,
    ]
})
export class CreateIssueModule{}