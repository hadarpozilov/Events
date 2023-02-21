import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventDetailsModel } from 'src/app/models/eventDetails-model';
import { EventModel } from 'src/app/models/events-model';
import { EventDetailsService } from 'src/app/services/event-details-service.service';

@Component({
  selector: 'app-add-event-details',
  templateUrl: './add-event-details.component.html',
  styleUrls: ['./add-event-details.component.css']
})
export class AddEventDetailsComponent implements OnInit {
  public event: EventModel[] = [];
  public eventDetails= new EventDetailsModel();

  constructor(private eventDetailsService: EventDetailsService, private router: Router  ) { }

  async ngOnInit() {
    try {
      this.event = await this.eventDetailsService.getAllEvent();
  }
  catch(err: any) {
      alert(err.message);
  }
  }

  public async send() {
    try {
        await this.eventDetailsService.addEvent(this.eventDetails);
        alert("Site has been successfully added");
        this.router.navigateByUrl("/event");
    }
    catch(err: any) {
        alert(err.message);
    }
}

}
