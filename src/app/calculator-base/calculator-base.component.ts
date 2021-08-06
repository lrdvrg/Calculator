import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calculator-base',
  templateUrl: './calculator-base.component.html',
  styleUrls: ['./calculator-base.component.css'],
})
export class CalculatorBaseComponent implements OnInit {
  @Output() doAction = new EventEmitter<any>();

  eventsSubject: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit() {}

  receiveOperation(event) {
    this.sentToDo(event);
  }

  sentToDo(event) {
    this.eventsSubject.next(event);
  }
}
