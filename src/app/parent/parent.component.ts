import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
  parentMessage: string = "";
  vote: number = 0;
  username: string = "";
  user_name: string = "";

  constructor() { }

  ngOnInit() {
  }

  voteCount(value) {
    this.vote = value;
  }
}
