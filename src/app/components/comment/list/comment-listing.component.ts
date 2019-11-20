import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/ApiServices/post/service';

@Component({
  selector: 'app-comment-listing',
  templateUrl: './comment-listing.component.html',
  styleUrls: ['./comment-listing.component.css']
})
export class CommentListingComponent implements OnInit {
  @Input() postId;
  @Input() commentListing;
  @Input() comments;
  postcomments;

  constructor(public postservice: PostService) { }

  ngOnInit() {
    if (this.commentListing) {
      this.comments;
    }
    else {
      this.postservice.getpostcomments(this.postId).subscribe((res) => {
        this.postcomments = res;
      });
    }
  }
}

