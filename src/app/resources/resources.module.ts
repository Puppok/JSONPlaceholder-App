import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ResourcesComponent} from "./resources.component";
import {RouterModule, Routes} from "@angular/router";

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
    ResourcesComponent
  ],
})
export class ResourcesModule {
}
