// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Action } from '@ngrx/store';
// import { Observable, of } from 'rxjs';
// import { catchError, map, mergeMap } from 'rxjs/operators';
// import * as CommentActions from '../Actions/comment.action';


// @Injectable()
// export class CommentEffects {
//   constructor(private http: HttpClient, private action$: Actions) {}

//   private ApiURL: string = 'https://localhost:3000/api/comments';

//   Getomments$: Observable<Action> = createEffect(() =>
//     this.action$.pipe(
//       ofType(CommentActions.BeginCreatecommentAction),
//       mergeMap(action =>
//         this.http.get(this.ApiURL).pipe(
//           map((comment: Comment[]) => {
//             return CommentActions.SuccessGetCommentAction({ payload: comment });
//           }),
//         )
//       )
//     )
//   );

//   Createcomments$: Observable<Action> = createEffect(() =>
//     this.action$.pipe(
//       ofType(CommentActions.BeginCreatecommentAction),
//       mergeMap(action =>
//         this.http
//           .post(this.ApiURL, JSON.stringify(action.payload), {
//             headers: { 'Content-Type': 'application/json' }
//           })
//           .pipe(
//             map((comment: Comment) => {
//               return CommentActions.SuccessGetCommentAction({ payload: comment });
//             }),
//           )
//       )
//     )
//   );
// };
