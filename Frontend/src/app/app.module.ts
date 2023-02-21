import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { EventDetailsListComponent } from './components/eventDetails-area/event-details-list/event-details-list.component';
import { AddEventDetailsComponent } from './components/eventDetails-area/add-event-details/add-event-details.component';

@NgModule({
  declarations: [
    LayoutComponent,
    EventDetailsListComponent,
    AddEventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
