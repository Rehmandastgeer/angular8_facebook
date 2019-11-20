import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/models/comment/comment';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(public http: HttpClient, public comment: Comment,private store:Store<any>) { }
  getcommentslist(): Observable<any> {
    const url = `http://localhost:3000/api/comments`;
    return this.http.get(url);
  }
  postUserComment(data): Observable<any> {
    const url = `http://localhost:3000/api/comments`;
    return this.http.post(url, data);
  }
  getcomments():Observable<any>{
   return this.store.select('CommentReducer');
  }
}
