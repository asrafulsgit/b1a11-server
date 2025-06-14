const express = require('express');
const eventRouter = express.Router();

eventRouter.post('/create-event','')
eventRouter.get('/my-events','')
eventRouter.get('/event-details/:id','')
eventRouter.put('/update-event/:id','')
eventRouter.get('/browse-events','')
eventRouter.get('/featured-events','')
eventRouter.delete('/delete-event/:id',deleteTip)
// eventRouter.get('/filter-tips',filterTips)

module.exports = eventRouter;