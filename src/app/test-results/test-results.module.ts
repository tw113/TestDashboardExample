import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultsComponent } from './test-results.component';
import { SharedModule } from '../shared/shared.module';
import {
  MatTableModule,
  MatCardModule,
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { ResultCardComponent } from './result-card/result-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [TestResultsComponent],
  declarations: [TestResultsComponent, ResultCardComponent]
})
export class TestResultsModule { }
