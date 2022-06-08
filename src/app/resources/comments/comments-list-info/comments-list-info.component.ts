import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../shared/models/comment.interface";

@Component({
  selector: 'comments-list-info',
  templateUrl: './comments-list-info.component.html',
  styleUrls: ['./comments-list-info.component.scss']
})
export class CommentsListInfoComponent implements OnInit {

  @Input() comment!: Comment

  constructor() { }

  ngOnInit(): void {
  }

}
