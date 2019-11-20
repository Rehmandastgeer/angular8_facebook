import { createAction, props } from '@ngrx/store';
import { Comment } from '../models/comment/comment';

export const GetcommentAction = createAction('[Comment] - Get Comment');
export const CreatecommentAction = createAction('[Comment] - Create Comment', props<Comment>());
export const BeginCreatecommentAction = createAction(
    '[Comment] - Begin Create Comment',
    props<{ payload: Comment }>()
);
export const SuccessGetCommentAction = createAction(
    '[Comment] - Success Get Comment',
    props<{ payload: Comment }>()
  );
  export const ErrorCommentAction = createAction('[Comment] - Error', props<Comment>());