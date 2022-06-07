import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "./models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    return this.http.get<Post[]>(url)
  }
}
