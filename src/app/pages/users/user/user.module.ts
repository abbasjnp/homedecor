import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { Routes, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {PaginatorModule} from 'primeng/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {GrowlModule} from 'primeng/growl';
import {MultiSelectModule} from 'primeng/multiselect';
// import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MultiSelectModule} from 'primeng/multiselect';
import {MatListModule} from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material';


const routes: Routes = [
  {
    path:'',
    component:UserComponent
  }
];

@NgModule({
  imports: [
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    PaginatorModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatIconModule,
    GrowlModule,
    MultiSelectModule,
    MatAutocompleteModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [UserComponent]
})

export class UserModule { }