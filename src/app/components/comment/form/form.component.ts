import { Component, OnInit, Input } from '@angular/core';
import { Comment} from '../../../models/comment/comment';
import { CommentService } from 'src/app/ApiServices/comment/service';
import { select, Store, State } from '@ngrx/store';
import CommentState from 'src/app/State/comment.state';
import { CreatecommentAction } from 'src/app/Actions/comment.action';
import { stat } from 'fs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user;
  storecomment:any;
  data;
  @Input() postId;
  userComment;
  constructor(public comment: Comment, public commentservice: CommentService,
     private store: Store<CommentState>) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    
  }
  submit(post) {
    this.data = {
      postId: post,
      comment: this.comment,
      userId: this.user.id
    }
    this.commentservice.postUserComment(this.data).subscribe((res) => {
      this.userComment = res;
    });
  //this.store.select(this.storecomment);
  this.store.dispatch(CreatecommentAction({comment_description: this.comment.comment_description,
    postId: this.postId, userId: this.user.id }));
   
  }

}