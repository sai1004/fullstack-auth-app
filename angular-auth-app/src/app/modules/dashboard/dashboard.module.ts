import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [{ path: 'dashboard', component: DashboardPageComponent }];

@NgModule({
    declarations: [DashboardPageComponent],
    imports: [CommonModule, RouterModule.forChild(routes), SharedModule, FlexLayoutModule, ComponentsModule],
})
export class DashboardModule {}
