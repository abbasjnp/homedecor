import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddModelComponent } from './add-model.component';
import { Routes, RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatAutocompleteModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatSelectModule} from '@angular/material'
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {GrowlModule} from 'primeng/growl';

const routes: Routes = [
  {
    path:'',
    component:AddModelComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MultiSelectModule,
    MatCheckboxModule,
    AutoCompleteModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MatSelectModule,
    GrowlModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddModelComponent],
  exports: [RouterModule]
})

export class AddModelModule { }
