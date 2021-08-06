import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry } from './models/entry';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
})
export class EntriesComponent implements OnInit {
  @Output() sendOperation = new EventEmitter<any>();

  entries: Entry[] = [
    { viewValue: 'C', value: 'delete', type: 'delete' },
    { viewValue: '()', value: '()', type: 'parentheses' },
    { viewValue: '%', value: '%', type: 'operation' },
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

  infoSender = '';

  constructor() {}

  ngOnInit() {}

  write(event: Entry) {
    this.sendOperation.emit(event);
  }
}
