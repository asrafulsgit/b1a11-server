const express = require('express');
const { createBookEvent, myBookEvents, deleteBookEvent, bookEventsIds } = require('../controllers/bookEvent.controllers');
const userAuthentication = require('../middlewares/userAuth-middleware');
const bookEventRouter = express.Router();



bookEventRouter.post('/create/book-event/:id',userAuthentication, createBookEvent)
bookEventRouter.get('/book-events',userAuthentication, myBookEvents)
bookEventRouter.delete('/book-event/:id',userAuthentication, deleteBookEvent)
bookEventRouter.get('/book-event-ids',userAuthentication, bookEventsIds)


module.exports = bookEventRouter;