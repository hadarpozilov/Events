import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventDetailsModel } from '../models/eventDetails-model';
import { EventModel } from '../models/events-model';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  constructor(private http: HttpClient) { }

  public async getAllEvent(): Promise<EventModel[]> {
    const observable = this.http.get<EventModel[]>(environment.eventUrl)
    const customers = await firstValueFrom(observable);
    return customers;
  }
  public async getEventbytype(eventId: string): Promise<EventDetailsModel[]> {
    const observable = this.http.get<EventDetailsModel[]>(environment.eventByTypeUrl + eventId)
    const tasks = await firstValueFrom(observable);
    return tasks;
  }

  public async addEvent(event: EventDetailsModel): Promise<void> {
    const observable = this.http.post<EventDetailsModel>(environment.eventDetailsUrl, event);
    await firstValueFrom(observable)
  }

  public async deleteEvent(_id: string): Promise<void> {
    const observable = this.http.delete(environment.eventDetailsUrl + _id);
    await firstValueFrom(observable);
  }
}
