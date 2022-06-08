import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Comment} from "../../../shared/models/comment.interface";
import {ApiService} from "../../../shared/api.service";

@Injectable()
export class CommentsListService {

  private comments$$ = new BehaviorSubject<Comment[]>([])
  readonly comments$ = this.comments$$.asObservable()

  constructor(private apiService: ApiService) { }

  getComments() {
    this.apiService.getComments().subscribe(comments => this.comments$$.next(comments))
  }
}
