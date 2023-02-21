import mongoose from "mongoose";
import { EventModel } from "./events-model";

export interface IEventDetailsModel extends mongoose.Document{
    date: string;
    description: string;
    address:string;
    people:number;
    eventId:mongoose.Schema.Types.ObjectId;
    done: boolean;
}

export const EventDetailsSchema = new mongoose.Schema<IEventDetailsModel>({
    description: String,
    date: String,
    address:String,
    people:Number,
    done: Boolean,
    eventId:mongoose.Schema.Types.ObjectId,
},{
    versionKey: false,
    toJSON: {virtuals: true},
    id: false
    
});

EventDetailsSchema.virtual("region", {
    ref: EventModel,
    localField: "eventId",
    foreignField: "_id",
    justOne: true
});


export const EventDetailsModel = mongoose.model<IEventDetailsModel>("EventDetailsModel", EventDetailsSchema, "EventDetails")