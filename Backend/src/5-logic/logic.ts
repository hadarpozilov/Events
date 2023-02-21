import { EventModel, IEventModel } from "../4-models/events-model";
import { EventDetailsModel, IEventDetailsModel } from "../4-models/eventDetails-model";


async function getAllEvent(): Promise<IEventModel[]> {
    return EventModel.find().exec();
}
async function getEventbytype(eventId: string): Promise<IEventDetailsModel[]> {
    return EventDetailsModel.find({ eventId }).populate("region").exec();
}

async function addEvent(event: IEventDetailsModel): Promise<IEventDetailsModel> {
    return event.save();
}

async function deleteEvent(_id: string): Promise<void> {
    await EventDetailsModel.findByIdAndDelete(_id).exec();
}

export default {
    getAllEvent,
    getEventbytype,
    addEvent,
    deleteEvent
};

