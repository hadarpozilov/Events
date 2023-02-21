import { EventModel } from "./events-model"

export class EventDetailsModel{
    public _id: string;
    public date: string
    public description: string
    public address: string
    public people: number
    public eventId: string
    public done: boolean
    public region: EventModel;

}