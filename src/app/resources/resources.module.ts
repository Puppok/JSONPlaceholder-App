import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ResourcesComponent} from "./resources.component";
import {RouterModule, Routes} from "@angular/router";
import { CommentsListComponent } from './comments/comments-list/comments-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesComponent,
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts-list/posts-list.module').then(module => module.PostsListModule),
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ResourcesComponent,
    CommentsListComponent
  ],
})
export class ResourcesModule {
}
