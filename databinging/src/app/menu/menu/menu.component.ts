import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // posts=[
  //   {name:'first post', amount:'one of the thiree'},
  //   {name:'second post', amount:'two of the thiree'},
  //   {name:'third post', amount:'three of the thiree'}
  // ];

 @Input() posts =[]
  constructor() { }

  ngOnInit(): void {
  }

}
