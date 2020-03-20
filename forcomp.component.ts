import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forcomp',
  templateUrl: './forcomp.component.html',
  styleUrls: ['./forcomp.component.css']
})
export class ForcompComponent implements OnInit {
title="hi";
fruits=['apple','kiwi','strawberry','avocado'];
fr=this.fruits[3];
  constructor() { }

  ngOnInit() {
  }

}
