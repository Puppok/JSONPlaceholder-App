import { Component, OnInit } from '@angular/core';
import {PostsListService} from "./posts-list.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  providers: [PostsListService]
})
export class PostsListComponent implements OnInit {

  constructor(readonly postsListService: PostsListService) { }

  ngOnInit(): void {
    this.postsListService.getPosts()
  }

}
