const express = require('express');
const userAuthentication = require('../middlewares/userAuth-middleware');
const reviewRouter = express.Router();



reviewRouter.post('/create-review',userAuthentication,  )
reviewRouter.get('/reviews/:id',userAuthentication,  )
reviewRouter.put('/update-review/id',userAuthentication,   )
reviewRouter.delete('/delete-review/id',userAuthentication,   )


module.exports = reviewRouter;