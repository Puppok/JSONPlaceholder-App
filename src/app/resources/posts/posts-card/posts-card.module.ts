import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {PostsCardComponent} from "./posts-card.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: PostsCardComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PostsCardComponent
  ],
})
export class PostsCardModule {
}
