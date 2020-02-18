import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OperatorMauritelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OperatorMauritelProvider {

  constructor(public http: HttpClient) {
    console.log('Hello OperatorMauritelProvider Provider');
  }

}
