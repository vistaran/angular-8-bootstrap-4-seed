import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

declare let toastr: any;
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // console.log(moment().format('MMDDDYYYY'));
    // console.dir($('body'));
    // toastr.success('Hello world');
  }

}
