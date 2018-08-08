import { Component, OnInit, Input } from '@angular/core';
import { Method } from '../../shared/models/method.model';
import { TestRunReport } from '../../shared/models/test-run-report.model';

@Component({
  selector: 'result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  @Input() report: TestRunReport;

  constructor() { }

  ngOnInit() {
  }

}
