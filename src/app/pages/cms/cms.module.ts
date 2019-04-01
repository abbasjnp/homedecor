import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsComponent } from './cms.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from '../../components/header/header.module';
import { LocatorModule } from '../../components/locator/locator.component';

const routes: Routes = [
  {
    path:'',
    component:CmsComponent,
    children: [
      {path: '', redirectTo:'categoryList', pathMatch:'full'},
      {path: 'categoryList', loadChildren: './category-lists/category-lists.module#CategoryListsModule', data: { state: 'categoryList' }},
      {path: 'categoryList/:id', loadChildren: './categorylist/categorylist.module#CategorylistModule', data: { state: 'categoryList' }},
      {path: 'categoryList/:id/:product', loadChildren: './add-model/add-model.module#AddModelModule', data: { state: 'categoryList' }},
      {path: 'texturelist', loadChildren: './texture-list/texture-list.module#TextureListModule', data: { state: 'texturelist' }},
      {path: 'texturelist/:product', loadChildren: './texture-list/product/product.module#ProductModule', data: { state: 'texturelist' }},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    LocatorModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [CmsComponent]
})
export class CmsModule { }
