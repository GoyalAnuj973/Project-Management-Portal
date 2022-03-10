import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from "@angular/core";
import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        CardComponent,
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatCardModule,
        CommonModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule{}