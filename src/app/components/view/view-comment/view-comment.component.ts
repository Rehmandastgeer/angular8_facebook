import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css']
})
export class ViewCommentComponent implements OnInit {
  @Input() comment;
  constructor() { }

  ngOnInit() {
  }

}
