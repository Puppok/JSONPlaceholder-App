import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CommentsListComponent} from "./comments-list.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CommentsListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CommentsListComponent
  ]
})
export class CommentsListModule {
}
