import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TestResultsModule } from './test-results/test-results.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
