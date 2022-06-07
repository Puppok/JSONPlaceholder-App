import { Component, OnInit } from '@angular/core';
import {PostsCardService} from "./posts-card.service";

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
  providers: [PostsCardService]
})
export class PostsCardComponent implements OnInit {

  constructor(readonly postsCardService: PostsCardService) { }

  ngOnInit(): void {
  }

}
