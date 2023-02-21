import mongoose from "mongoose";

// 1. interface
export interface IEventModel extends mongoose.Document {
    event: string;
}

// 2. schema
export const EventSchema = new mongoose.Schema<IEventModel>({
    event: String
});

// 3. model
export const EventModel = mongoose.model<IEventModel>("EventModel", EventSchema, "events");
