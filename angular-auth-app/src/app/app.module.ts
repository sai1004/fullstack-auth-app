import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';
import { ConfirmDialogComponent } from './shared/component/confirm-dialog.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        FlexLayoutModule,
        ComponentsModule,
    ],
    providers: [],
    entryComponents: [ConfirmDialogComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
