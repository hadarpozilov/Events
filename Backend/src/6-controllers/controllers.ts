import express, { NextFunction, Request, Response } from "express";
import { EventDetailsModel } from "../4-models/eventDetails-model";
import logic from "../5-logic/logic";

const router = express.Router();

router.get("/event-type", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const event = await logic.getAllEvent();
        response.json(event)
    }
    catch (err: any) {
        next(err);
    }
});

router.get("/event-by-type/:eventId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const eventId = request.params.eventId
        const event = await logic.getEventbytype(eventId);
        response.json(event)
    }
    catch (err: any) {
        next(err);
    }
});
router.post("/event", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const event = new EventDetailsModel(request.body);
        const addedEvent = await logic.addEvent(event);
        response.status(201).json(addedEvent);
    }
    catch (err: any) {
        next(err);
    }
});

router.delete("/event/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id;
        await logic.deleteEvent(_id);
        response.sendStatus(204);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;