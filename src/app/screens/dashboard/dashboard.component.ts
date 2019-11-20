import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/ApiServices/post/service';
import { UserService } from 'src/app/ApiServices/user/service';
import { CommentService } from 'src/app/ApiServices/comment/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  @Input() postId;
  @Input() commentListing;
  @Input() comments;
  postcomments;
  allPosts
  public postListing;
  public userId;
  public posts;
  constructor(public router: Router, public postservice: PostService
    , private commentservice: CommentService, private userservice: UserService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'))
    this.postservice.getposts().subscribe((res) => {
      this.allPosts = res;
    });
  }
}
