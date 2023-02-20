import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';

@NgModule({
    declarations: [
        AppComponent,
        WarningAlertComponent,
        SuccessAlertComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule
    ]
})
export class AppModule { }
