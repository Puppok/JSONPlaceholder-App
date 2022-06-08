import { Component, OnInit } from '@angular/core';
import {CommentsListService} from "./comments-list.service";

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
  providers: [CommentsListService]
})
export class CommentsListComponent implements OnInit {

  constructor(readonly commentsListService: CommentsListService) { }

  ngOnInit(): void {
    this.commentsListService.getComments()
  }

}
