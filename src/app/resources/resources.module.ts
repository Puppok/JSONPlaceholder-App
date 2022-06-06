import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ResourcesComponent} from "./resources.component";
import {RouterModule, Routes} from "@angular/router";
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import {PostsCardComponent} from "./posts/posts-card/posts-card.component";

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ResourcesComponent,
    PostsListComponent,
    PostsCardComponent
  ],
})
export class ResourcesModule {
}
