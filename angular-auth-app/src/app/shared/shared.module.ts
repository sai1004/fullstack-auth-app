import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './service/app.interceptor';
import { HttpService } from './service/http.service';
import { LogoComponent } from './component/logo.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProgressBarComponent } from './component/progress-bar.component';
import { ConfirmDialogComponent } from './component/confirm-dialog.component';
import { AppService } from './service/app.service';
import { NumericDirective, NumericsDirective } from './utils/directives';
import { FilterPipe, niceDateFormatPipe, SortPipe } from './utils/custom.pipe';
import { PUCComponent } from './component/puc.component';

@NgModule({
    declarations: [LogoComponent, ProgressBarComponent, ConfirmDialogComponent, PUCComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        MatSnackBarModule,
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        LogoComponent,
        PUCComponent,
        ProgressBarComponent,
        MatSnackBarModule,
        ConfirmDialogComponent,
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                HttpService,
                AppService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AppInterceptor,
                    multi: true,
                },
            ],
        };
    }
}
