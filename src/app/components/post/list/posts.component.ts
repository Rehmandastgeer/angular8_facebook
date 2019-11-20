import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/ApiServices/post/service';
import { CommentService } from 'src/app/ApiServices/comment/service';
import { UserService } from 'src/app/ApiServices/user/service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  userComment;
  @Input() postListing
  @Input() userId
  @Input() postsList
  public commentListing;
  public postId;
  public comments;
  public userid = this.userId;
  storecomment;
  constructor(public router: Router, private postservice: PostService
    , private commentservice: CommentService, private userservice: UserService) {

  }

  ngOnInit() {
    if (this.postListing) {
      this.posts = this.postsList;
    } else {
      this.userservice.getPost(this.userId).subscribe((res) => {
        this.posts = res;
      });
      this.commentservice.getcomments().subscribe((State)=>{
        this.storecomment=State.Comment;
        console.log('state',this.storecomment);
       });
    }
    var user = JSON.parse(localStorage.getItem(user));
  }
}
