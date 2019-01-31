import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  createMessage(message) {
    this.data.changeMessage(message);
  }

}
