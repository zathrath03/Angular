import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';

@NgModule({
    declarations: [
        AppComponent,
        WarningAlertComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule
    ]
})
export class AppModule { }
