const express = require('express');
const { createEvent, myEvents, eventDetails, updateEvent, browseEvent, featuredEvents, deleteEvent } = require('../controllers/event.controllers');
const eventRouter = express.Router();

eventRouter.post('/create-event', createEvent)
eventRouter.get('/my-events', myEvents)
eventRouter.get('/event-details/:id', eventDetails)
eventRouter.put('/update-event/:id', updateEvent)
eventRouter.get('/browse-events', browseEvent)
eventRouter.get('/featured-events', featuredEvents)
eventRouter.delete('/delete-event/:id',deleteEvent)
// eventRouter.get('/filter-tips',filterTips)

module.exports = eventRouter;