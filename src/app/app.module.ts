import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorBaseComponent } from './calculator-base/calculator-base.component';
import { ResultComponent } from './calculator-base/result/result.component';
import { EntriesComponent } from './calculator-base/entries/entries.component';

@NgModule({
  declarations: [	
    AppComponent,
      CalculatorBaseComponent,
      ResultComponent,
      EntriesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
