import { Comment } from '../models/comment/comment';

export default class CommentState {
    Comments: Array<Comment>;
}

export const initializeState = () => {
    return { Comments: Array<Comment>() };
};