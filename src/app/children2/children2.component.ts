import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit {
  @Output() voteSize = new EventEmitter();
  counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  voted() {
    this.counter ++;
    this.voteSize.emit(this.counter);
  }
}
