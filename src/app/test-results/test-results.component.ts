import { Component, OnInit } from '@angular/core';
import { TestRunReport } from '../shared/models/test-run-report.model';
import { GetResultsService } from '../shared/services/get-results.service';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {
  
  dateTimeRan: Date;
  dataSource: any;
  columnsToDisplay = [];
  footerColumns = ["MethodTested"]
  clicked: boolean = false;
  testClicked: TestRunReport;
  passCount: number = 0;
  failCount: number = 0;
  warnCount: number = 0;

  constructor(private resultsService: GetResultsService) { }

  ngOnInit() {
    this.dataSource = this.resultsService.getTestResults();
    this.dateTimeRan = new Date("2016-01-17T08:44:29+0100");
    this.columnsToDisplay.push("MethodTested");
    for (let value of this.dataSource.data[0].systems) {
      this.columnsToDisplay.push(value.system);
    }

    for (let method of this.dataSource.data) {
      for(let system of method.systems) {
        if(system.runResult == "PASS") {
          this.passCount = this.passCount + 1;
        }
        if(system.runResult == "FAIL") {
          this.failCount = this.failCount + 1;
        }
        if(system.runResult == "WARNING") {
          this.warnCount = this.warnCount + 1;
        }
      }
    }
  }

  onClick(test: TestRunReport) {
    this.clicked = true;
    this.testClicked = test;
  }

  closeMessage() {
    this.clicked = false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}