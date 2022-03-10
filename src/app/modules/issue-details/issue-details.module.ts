import { IssueDetailsComponent } from './issue-details.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonModule } from './../../components/button/button.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    declarations: [
        IssueDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
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
        ButtonModule,
        MatOptionModule
    ],
    exports: [
        IssueDetailsComponent
    ]
})
export class IssueDetailsModule{}