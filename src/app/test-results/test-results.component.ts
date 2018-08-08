import { Component, OnInit } from '@angular/core';
import { TestRunReport } from '../shared/models/test-run-report.model';
import { Method } from '../shared/models/method.model';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {
  
  dateTimeRan: Date;
  data: Array<Method> = DATA;
  columnsToDisplay = [];
  footerColumns = ["MethodTested"]
  clicked: boolean = false;
  testClicked: TestRunReport;
  passCount: number = 0;
  failCount: number = 0;
  warnCount: number = 0;

  constructor() { }

  ngOnInit() {
    this.dateTimeRan = new Date("2016-01-17T08:44:29+0100");
    this.columnsToDisplay.push("MethodTested");
    for (let value of this.data[0].systems) {
      this.columnsToDisplay.push(value.system);
    }

    for (let method of this.data) {
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

}

const DATA: Array<Method> = [
  { method: "PostEntities",
    systems: [
      {system: "Canvas", method: "PostEntities", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostEntities", runStart: "time start", elapsed: 999, runResult: "WARNING", messages: ["test has warning", ""] },
      {system: "Brightspace", method: "PostEntities", runStart: "time start", elapsed: 987, runResult: "PASS", messages: [] },
      {system: "Cache", method: "PostEntities", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostEntities", runStart: "time start", elapsed: 159, runResult: "WARNING", messages: ["test has warning"] }
    ]
  },
  { method: "GetEntities",
    systems: [
      {system: "Canvas", method: "GetEntities", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetEntities", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetEntities", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetEntities", runStart: "time start", elapsed: 852, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Dynamcis CRM", method: "GetEntities", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteEntities",
    systems: [
      {system: "Canvas", method: "DeleteEntities", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteEntities", runStart: "time start", elapsed: 1011, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "DeleteEntities", runStart: "time start", elapsed: 789, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Cache", method: "DeleteEntities", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteEntities", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostCourse",
    systems: [
      {system: "Canvas", method: "PostCourse", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostCourse", runStart: "time start", elapsed: 999, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "PostCourse", runStart: "time start", elapsed: 987, runResult: "PASS", messages: [] },
      {system: "Cache", method: "PostCourse", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostCourse", runStart: "time start", elapsed: 159, runResult: "WARNING", messages: ["test has warning"] }
    ]
  },
  { method: "GetCourse",
    systems: [
      {system: "Canvas", method: "GetCourse", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetCourse", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetCourse", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetCourse", runStart: "time start", elapsed: 852, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "GetEntities", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteCourse",
    systems: [
      {system: "Canvas", method: "DeleteCourse", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteCourse", runStart: "time start", elapsed: 1011, runResult: "FAIL", messages: ["test failed", "Exception in thread main java.lang.NullPointerException at com.example.myproject.Book.getTitle(Book.java:16) at com.example.myproject.Author.getBookTitles(Author.java:25) at com.example.myproject.Bootstrap.main(Bootstrap.java:14)"] },
      {system: "Brightspace", method: "DeleteCourse", runStart: "time start", elapsed: 789, runResult: "PASS", messages: [] },
      {system: "Cache", method: "DeleteCourse", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteCourse", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostUser",
    systems: [
      {system: "Canvas", method: "PostUser", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostUser", runStart: "time start", elapsed: 999, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Brightspace", method: "PostUser", runStart: "time start", elapsed: 987, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Cache", method: "PostUser", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostUser", runStart: "time start", elapsed: 159, runResult: "PASS", messages: [] }
    ]
  },
  { method: "GetUser",
    systems: [
      {system: "Canvas", method: "GetUser", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetUser", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetUser", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetUser", runStart: "time start", elapsed: 852, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "GetUser", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteUser",
    systems: [
      {system: "Canvas", method: "DeleteUser", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteUser", runStart: "time start", elapsed: 1011, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "DeleteUser", runStart: "time start", elapsed: 789, runResult: "PASS", messages: [] },
      {system: "Cache", method: "DeleteUser", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteUser", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostEntities",
    systems: [
      {system: "Canvas", method: "PostEntities", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostEntities", runStart: "time start", elapsed: 999, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Brightspace", method: "PostEntities", runStart: "time start", elapsed: 987, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Cache", method: "PostEntities", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostEntities", runStart: "time start", elapsed: 159, runResult: "PASS", messages: [] }
    ]
  },
  { method: "GetEntities",
    systems: [
      {system: "Canvas", method: "GetEntities", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetEntities", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetEntities", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetEntities", runStart: "time start", elapsed: 852, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Dynamcis CRM", method: "GetEntities", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteEntities",
    systems: [
      {system: "Canvas", method: "DeleteEntities", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteEntities", runStart: "time start", elapsed: 1011, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "DeleteEntities", runStart: "time start", elapsed: 789, runResult: "PASS", messages: [] },
      {system: "Cache", method: "DeleteEntities", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteEntities", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostCourse",
    systems: [
      {system: "Canvas", method: "PostCourse", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostCourse", runStart: "time start", elapsed: 999, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "PostCourse", runStart: "time start", elapsed: 987, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Cache", method: "PostCourse", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostCourse", runStart: "time start", elapsed: 159, runResult: "PASS", messages: [] }
    ]
  },
  { method: "GetCourse",
    systems: [
      {system: "Canvas", method: "GetCourse", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetCourse", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetCourse", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetCourse", runStart: "time start", elapsed: 852, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Dynamcis CRM", method: "GetEntities", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteCourse",
    systems: [
      {system: "Canvas", method: "DeleteCourse", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteCourse", runStart: "time start", elapsed: 1011, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "DeleteCourse", runStart: "time start", elapsed: 789, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Cache", method: "DeleteCourse", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteCourse", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostUser",
    systems: [
      {system: "Canvas", method: "PostUser", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostUser", runStart: "time start", elapsed: 999, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Brightspace", method: "PostUser", runStart: "time start", elapsed: 987, runResult: "PASS", messages: [] },
      {system: "Cache", method: "PostUser", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostUser", runStart: "time start", elapsed: 159, runResult: "PASS", messages: [] }
    ]
  },
  { method: "GetUser",
    systems: [
      {system: "Canvas", method: "GetUser", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetUser", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetUser", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetUser", runStart: "time start", elapsed: 852, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "GetUser", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteUser",
    systems: [
      {system: "Canvas", method: "DeleteUser", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteUser", runStart: "time start", elapsed: 1011, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Brightspace", method: "DeleteUser", runStart: "time start", elapsed: 789, runResult: "PASS", messages: [] },
      {system: "Cache", method: "DeleteUser", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteUser", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostUser",
    systems: [
      {system: "Canvas", method: "PostUser", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostUser", runStart: "time start", elapsed: 999, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Brightspace", method: "PostUser", runStart: "time start", elapsed: 987, runResult: "PASS", messages: [] },
      {system: "Cache", method: "PostUser", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostUser", runStart: "time start", elapsed: 159, runResult: "PASS", messages: [] }
    ]
  },
  { method: "GetUser",
    systems: [
      {system: "Canvas", method: "GetUser", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetUser", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetUser", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetUser", runStart: "time start", elapsed: 852, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "GetUser", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteUser",
    systems: [
      {system: "Canvas", method: "DeleteUser", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteUser", runStart: "time start", elapsed: 1011, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Brightspace", method: "DeleteUser", runStart: "time start", elapsed: 789, runResult: "PASS", messages: [] },
      {system: "Cache", method: "DeleteUser", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteUser", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  },
  { method: "PostEntities",
    systems: [
      {system: "Canvas", method: "PostEntities", runStart: "time start", elapsed: 111, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "PostEntities", runStart: "time start", elapsed: 999, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Brightspace", method: "PostEntities", runStart: "time start", elapsed: 987, runResult: "PASS", messages: [] },
      {system: "Cache", method: "PostEntities", runStart: "time start", elapsed: 1203, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "PostEntities", runStart: "time start", elapsed: 159, runResult: "WARNING", messages: ["test has warning"] }
    ]
  },
  { method: "GetEntities",
    systems: [
      {system: "Canvas", method: "GetEntities", runStart: "time start", elapsed: 951, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "GetEntities", runStart: "time start", elapsed: 369, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "GetEntities", runStart: "time start", elapsed: 963, runResult: "PASS", messages: [] },
      {system: "Cache", method: "GetEntities", runStart: "time start", elapsed: 852, runResult: "WARNING", messages: ["test has warning"] },
      {system: "Dynamcis CRM", method: "GetEntities", runStart: "time start", elapsed: 147, runResult: "PASS", messages: [] }
    ]
  },
  { method: "DeleteEntities",
    systems: [
      {system: "Canvas", method: "DeleteEntities", runStart: "time start", elapsed: 654, runResult: "PASS", messages: [] },
      {system: "Jenzabar", method: "DeleteEntities", runStart: "time start", elapsed: 1011, runResult: "PASS", messages: [] },
      {system: "Brightspace", method: "DeleteEntities", runStart: "time start", elapsed: 789, runResult: "FAIL", messages: ["test failed", "because of something"] },
      {system: "Cache", method: "DeleteEntities", runStart: "time start", elapsed: 456, runResult: "PASS", messages: [] },
      {system: "Dynamcis CRM", method: "DeleteEntities", runStart: "time start", elapsed: 123, runResult: "PASS", messages: [] }
    ]
  }
]