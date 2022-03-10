import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './button.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        ButtonComponent,
    ],
    imports: [
        MatButtonModule,
        CommonModule
    ],
    exports: [
        ButtonComponent
    ]
})
export class ButtonModule{}