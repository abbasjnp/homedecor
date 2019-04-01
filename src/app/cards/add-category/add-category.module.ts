import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
// import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MultiSelectModule} from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import {GrowlModule} from 'primeng/growl';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MultiSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    GrowlModule,
  ],
  declarations: [AddCategoryComponent],
  exports:[AddCategoryComponent]
})
export class AddCategoryModule { }
