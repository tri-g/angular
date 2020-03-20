import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {
	name=['tri','pooja','tony','roger','steve'];
	n='';
	addnames()
	{
		this.name.push(this.n);
	}


  constructor() { }

  ngOnInit() {
  }

}
