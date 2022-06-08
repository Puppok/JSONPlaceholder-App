import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./models/post.interface";
import {Comment} from "./models/comment.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts/'
  private commentUrl = 'https://jsonplaceholder.typicode.com/comments/'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.postUrl)
  }

  getPost(id: string) {
    return this.http.get<Post>(this.postUrl + id)
  }

  getComments() {
    return this.http.get<Comment[]>(this.commentUrl)
  }

  getComment(id: string) {
    return this.http.get<Comment>(this.commentUrl + id)
  }
}
