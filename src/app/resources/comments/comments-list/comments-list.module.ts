import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CommentsListComponent} from "./comments-list.component";
import {RouterModule, Routes} from "@angular/router";
import {CommentsListInfoComponent} from "../comments-list-info/comments-list-info.component";

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
    CommentsListComponent,
    CommentsListInfoComponent
  ]
})
export class CommentsListModule {
}
