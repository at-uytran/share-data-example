import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component'
import { ChildrenComponent } from './children/children.component'
import { ShareDataComponent } from './share-data/share-data.component'

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'children', component: ChildrenComponent },
  { path: 'share-data', component: ShareDataComponent },
  {path: "", redirectTo: '/parent', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
