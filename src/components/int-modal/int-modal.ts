import { Component } from '@angular/core';


@Component({
  selector: 'int-modal',
  templateUrl: 'int-modal.html'
})
export class IntModalComponent {

  text: string;

  constructor() {
    console.log('Hello IntModalComponent Component');
    this.text = 'Hello World';
  }

}
