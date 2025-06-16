const express = require('express');
const userAuthentication = require('../middlewares/userAuth-middleware');
const { createReview, updateReview, browseReview, deleteReview } = require('../controllers/review.controllers');
const reviewRouter = express.Router();



reviewRouter.post('/create-review',userAuthentication, createReview )
reviewRouter.get('/browse-reviews/:eventId',userAuthentication,  browseReview)
reviewRouter.put('/update-review/:reviewId',userAuthentication,  updateReview )
reviewRouter.delete('/delete-review/:reviewId',userAuthentication,  deleteReview )


module.exports = reviewRouter;