import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import the TreeGridModule for the TreeGrid component
import { TreeGridModule, PageService ,SortService, FilterService, EditService, ToolbarService, CommandColumnService } from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridModule
  ],
  providers: [ PageService, SortService , FilterService , EditService, ToolbarService, CommandColumnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
