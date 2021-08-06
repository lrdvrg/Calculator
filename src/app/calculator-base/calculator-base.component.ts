import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Entry } from './models/entry';

@Component({
  selector: 'app-calculator-base',
  templateUrl: './calculator-base.component.html',
  styleUrls: ['./calculator-base.component.css'],
})
export class CalculatorBaseComponent {
  @Output() doAction = new EventEmitter<any>();

  eventsSubject: Subject<void> = new Subject<void>();

  entries: Entry[] = [
    { viewValue: 'C', value: 'delete', type: 'delete' },
    { viewValue: '()', value: '()', type: 'parentheses' },
    { viewValue: '%', value: '%', type: 'percentage' },
    { viewValue: '/', value: '/', type: 'operation' },
    { viewValue: '7', value: '7', type: 'number' },
    { viewValue: '8', value: '8', type: 'number' },
    { viewValue: '9', value: '9', type: 'number' },
    { viewValue: 'X', value: '*', type: 'operation' },
    { viewValue: '4', value: '4', type: 'number' },
    { viewValue: '5', value: '5', type: 'number' },
    { viewValue: '6', value: '6', type: 'number' },
    { viewValue: '-', value: '-', type: 'operation' },
    { viewValue: '1', value: '1', type: 'number' },
    { viewValue: '2', value: '2', type: 'number' },
    { viewValue: '3', value: '3', type: 'number' },
    { viewValue: '+', value: '+', type: 'operation' },
    { viewValue: '+ / -', value: '+/-', type: '+/-' },
    { viewValue: '0', value: '0', type: 'number' },
    { viewValue: '.', value: '.', type: 'number' },
    { viewValue: '=', value: '=', type: 'result' },
  ];

  sentToDo(event) {
    this.eventsSubject.next(event);
  }
}
