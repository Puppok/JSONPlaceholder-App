import {Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {ApiService} from "../../../shared/api.service";

@Injectable()
export class PostsCardService {

  readonly post$ = this.activatedRoute.params.pipe(
    switchMap(params => this.apiService.getPost(params['id']))
  )

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService) {
  }
}
