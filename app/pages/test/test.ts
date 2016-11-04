import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lowercase } from './../../pipes/lowercase';



@Component({
  templateUrl: 'build/pages/test/test.html',
  pipes: [Lowercase]
})
export class TestPage {
  constructor(private nav: NavController) {}
}
