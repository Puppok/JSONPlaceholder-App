import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../shared/models/post.interface";

@Component({
  selector: 'posts-list-info',
  templateUrl: './posts-list-info.component.html',
  styleUrls: ['./posts-list-info.component.scss']
})
export class PostsListInfoComponent implements OnInit {

  @Input() post!: Post

  constructor() { }

  ngOnInit(): void {
  }

}
