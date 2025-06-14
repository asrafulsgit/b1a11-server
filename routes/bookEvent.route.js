const express = require('express');
const bookEventRouter = express.Router();



bookEventRouter.post('/create/book-event','')
bookEventRouter.get('/book-events','')
bookEventRouter.delete('/book-event/:id','')


module.exports = bookEventRouter;