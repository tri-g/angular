import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util',
  template:`<h2>{{"Im curvy and I like it"|lowercase}}</h2>
  <h2>{{"Im curvy and I like it"|uppercase}}</h2>
  <h2>{{"Im curvy and I like it"|titlecase}}</h2>
  <h2>{{"Im curvy and I like it"|slice:6:18}}</h2>
  <h2>{{3.456 | number:'1.2-3'}}</h2>
  <h2>{{3.4 | number:'3.4-5'}}</h2>
  <h2>{{3.4566789 | number:'3.1-2'}}</h2>
  <h2>{{person|json}}

  <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
      <h2>{{0.25 | currency:'INR'}}</h2>
     <h2>{{0.25 | currency:'INR ':'code'}}</h2>

     <h2>{{date}}</h2>
     <h2>{{date| date:'short'}}</h2>
     <h2>{{date| date:'shortDate'}}</h2>
     <h2>{{date| date:'shortTime'}}</h2>
  `,
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {
	public date=new Date();
	public person=
	{
		"fname":"tri",
		"lname":"g"
	}

  constructor() { }

  ngOnInit() {
  }

}
