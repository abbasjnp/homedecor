import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { LocatorModule } from '../../components/locator/locator.component';
import {MatSelectModule} from '@angular/material/select';
import { InfoCardModule } from '../../cards/info-card/info-card.component';
import {SliderModule} from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { RecentlyuserModule } from '../../cards/recentlyuser/recentlyuser.component';
import { ChartsModule } from 'ng2-charts';
import {PaginatorModule} from 'primeng/paginator';
const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  }
];

@NgModule({
  imports: [
    PaginatorModule,
    CommonModule,
    HeaderModule,
    LocatorModule,
    MatSelectModule,
    InfoCardModule,
    SliderModule,
    FormsModule,
    RecentlyuserModule,ChartsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [DashboardComponent]
})

export class DashboardModule { }