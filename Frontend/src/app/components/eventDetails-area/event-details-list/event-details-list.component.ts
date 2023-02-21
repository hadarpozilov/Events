import { Component, OnInit } from '@angular/core';
import * as e from 'express';
import { EventDetailsModel } from 'src/app/models/eventDetails-model';
import { EventModel } from 'src/app/models/events-model';
import { EventDetailsService } from 'src/app/services/event-details-service.service';

@Component({
  selector: 'app-event-details-list',
  templateUrl: './event-details-list.component.html',
  styleUrls: ['./event-details-list.component.css']
})
export class EventDetailsListComponent implements OnInit {
public event: EventModel[] = [];
public eventDetails: EventDetailsModel[] = [];

  constructor(private eventDetailsService: EventDetailsService) { }

  async ngOnInit() {
    try {
      this.event = await this.eventDetailsService.getAllEvent();
  }
  catch(err: any) {
      alert(err.message);
  }
  }

  
  public async display(args: Event) {
    try {
        const selectElement: HTMLSelectElement = args.target as HTMLSelectElement; 
        const value = selectElement.value;
        this.eventDetails = await this.eventDetailsService.getEventbytype(value);
    }
    catch(err: any) {
        alert(err.message);
    }
}

public async deleteEvent(_id: string) {
    try {
        await this.eventDetailsService.deleteEvent(_id);
        alert("Site has been successfully deleted");
        const indexToDelete = this.eventDetails.findIndex(eventDetails => eventDetails._id === _id);
        this.eventDetails.splice(indexToDelete, 1);
    }
    catch(err: any) {
        alert(err.message);
    }
}

}
