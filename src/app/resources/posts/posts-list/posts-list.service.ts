import {Injectable} from '@angular/core';
import {ApiService} from "../../../shared/api.service";
import {Post} from "../../../shared/models/post.interface";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class PostsListService {

  private posts$$ = new BehaviorSubject<Post[]>([])
  readonly posts$ = this.posts$$.asObservable()

  constructor(private apiService: ApiService) { }

  getPosts() {
    this.apiService.getPosts().subscribe(posts => this.posts$$.next(posts))
  }

  init() {
    this.getPosts()
  }
}
