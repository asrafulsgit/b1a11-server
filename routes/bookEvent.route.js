const express = require('express');
const { createBookEvent, myBookEvents, deleteBookEvent } = require('../controllers/bookEvent.controllers');
const bookEventRouter = express.Router();



bookEventRouter.post('/create/book-event', createBookEvent)
bookEventRouter.get('/book-events', myBookEvents)
bookEventRouter.delete('/book-event/:id', deleteBookEvent)


module.exports = bookEventRouter;