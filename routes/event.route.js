const express = require('express');
const { createEvent, myEvents, eventDetails, updateEvent, browseEvent, featuredEvents, deleteEvent } = require('../controllers/event.controllers');
const userAuthentication = require('../middlewares/userAuth-middleware');
const eventRouter = express.Router();

eventRouter.post('/create-event',userAuthentication, createEvent)
eventRouter.get('/my-events',userAuthentication, myEvents)
eventRouter.get('/event-details/:id',userAuthentication, eventDetails)
eventRouter.put('/update-event/:id',userAuthentication, updateEvent)
eventRouter.get('/browse-events', browseEvent)
eventRouter.get('/featured-events', featuredEvents)
eventRouter.delete('/delete-event/:id',userAuthentication, deleteEvent)
// eventRouter.get('/filter-tips',filterTips)

module.exports = eventRouter;