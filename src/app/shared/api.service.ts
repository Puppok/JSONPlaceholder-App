import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(this.postUrl)
  }

  getPost(id: string) {
    return this.http.get<Post>(this.postUrl + id)
  }
}
