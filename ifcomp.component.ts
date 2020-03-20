import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifcomp',
  templateUrl: './ifcomp.component.html',
  styleUrls: ['./ifcomp.component.css']
})
export class IfcompComponent {
	title='triveni'
	flag=true
	color=''
	toggleflag()
	{
		this.flag=!this.flag;
		return this.flag;
	}
	getcolor()
	{
		if(this.flag==true)
			this.color='pink';
		else
			this.color='red';
		return this.color;
	}
}
