import { Action, createReducer, on } from '@ngrx/store';
import CommentState, { initializeState } from '../State/comment.state';
import * as commentAction from '../Actions/comment.action';
import { Comment } from '../models/comment/comment';

export const initialState = initializeState();
const reducer = createReducer(
    initialState,
    on(commentAction.GetcommentAction, state => state),
    on(commentAction.CreatecommentAction, (state: CommentState, comment: Comment) => {
        console.log('comment reducer', comment);
        return { ...state, Comments: [...state.Comments, comment] };
    }),
    on(commentAction.SuccessGetCommentAction, (state: CommentState, { payload }) => {
        return { ...state, comments: payload };
      }),
);
export function CommentReducer(state: CommentState | undefined, action: Action) {
    return reducer(state, action);
}
