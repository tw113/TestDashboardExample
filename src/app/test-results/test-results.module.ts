import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestResultsComponent } from './test-results.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule, MatCardModule, MatButtonModule, MatBadgeModule, MatIconModule } from '@angular/material';
import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [TestResultsComponent],
  declarations: [TestResultsComponent, ResultCardComponent]
})
export class TestResultsModule { }
