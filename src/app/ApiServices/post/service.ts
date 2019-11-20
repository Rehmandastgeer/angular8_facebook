import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public http: HttpClient) { }

  getposts(): Observable<any> {
    const url = 'http://localhost:3000/api/posts';
    return this.http.get(url);
  }
  getpostcomments(postId): Observable<any> {
    const url = `http://localhost:3000/api/posts/${postId}/comments`;
    return this.http.get(url);
  }
  getUserPosts(userId): Observable<any> {
    const url = `http://localhost:3000/api/users/${userId}/posts`;
    return this.http.get(url);
  }
  getuserdata(userId, postId): Observable<any> {
    const url = `http://localhost:3000/api/posts/${userId}/comments/${postId}`;
    return this.http.get(url);
  }
}
