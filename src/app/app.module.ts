import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestResultsModule } from './test-results/test-results.module';
import { GetResultsService } from './shared/services/get-results.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestResultsModule
  ],
  providers: [GetResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
