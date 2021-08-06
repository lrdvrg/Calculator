import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as safeEval from 'safe-eval';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnDestroy {
  @Input() operation = '';

  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  constructor() {}

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe((event) =>
      this.doOperation(event)
    );
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  doOperation(event: any) {
    if (this.operation === 'SYNTAX ERROR') {
      this.operation = '';
    } else {
      switch (event.type) {
        case 'result':
          let isEvalValid = true;
          try {
            safeEval(this.operation);
          } catch (e) {
            this.operation = 'SYNTAX ERROR';
            isEvalValid = false;
          }
          console.log(isEvalValid);
          if (isEvalValid) {
            this.operation = safeEval(this.operation).toString();
          }

          break;

        case 'delete':
          this.operation = '';
          break;

        case 'parentheses':
          break;

        case 'percentage':
          break;

        case '+/-':
          if (this.operation.charAt(this.operation.length - 1) === '-') {
            this.operation = this.operation.substring(
              0,
              this.operation.length - 1
            );
          } else {
            this.operation += '-';
          }
          break;

        default:
          this.operation += event.value;
          break;
      }
    }
  }
}
