import { Component, OnInit } from '@angular/core';
import {PostsCardService} from "./posts-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
  providers: [PostsCardService]
})
export class PostsCardComponent implements OnInit {

  constructor(readonly postsCardService: PostsCardService,
              private router: Router) { }

  ngOnInit(): void {
  }

  backToList() {
    this.router.navigateByUrl('resources/posts')
  }
}
