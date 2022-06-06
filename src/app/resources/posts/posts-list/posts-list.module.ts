import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PostsListComponent} from "./posts-list.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PostsListComponent
  ],
})
export class PostsListModule {
}
