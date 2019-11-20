import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
 
  }
  showposts(){
    this.router.navigate(['posts']);
}
}