const Review = require("../models/review.model");

//create review
const createReview = async (req, res) => {
  const {id}=req.user;
  const {
   event , 
    rating,
    comment,
    date
  } = req.body; 

  try {
    if (
      !comment.trim() ||
      !event ||
      !rating ||
      !date 
    ) {
      return res.status(400).send({
        message: "All fields are required.",
        success: false,
      });
    }
     if (!id) {
      return res.status(400).send({
        message: "User ID is required.",
        success: false,
      });
    }
    const isExistReview = await Review.findOne({event,user : id})
    if(isExistReview){
        return res.status(404).send({
            message : "You have already post a review for this event!",
            success : false
        })
    }

    const newReview = new Review({
      user : id,
      event , 
      rating : Number(rating),
        comment,
        date
    });
    await newReview.save();
    
    
    return res.status(201).send({
      message: "Review successfully posted.",
      success: true,
      id : newReview?._id
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something broke!",
      success: false,
      error: error.message,
    });
  }
};

// Update event
const updateReview = async (req, res) => {
  const {id} = req.user;
  const {reviewId}=req.params;
  const {
    event , 
    rating,
    comment,
    date
  } = req.body;
   if (
      !comment.trim() ||
      !event ||
      !rating ||
      !image ||
      !date 
    ) {
      return res.status(400).send({
        message: "All fields are required.",
        success: false,
      });
    }

  try {
    if (!id || !reviewId) {
      return res.status(400).send({
        message: "User and review ID is required.",
        success: false,
      });
    }

    const updatedReview = await Event.findByIdAndUpdate(
      {_id : reviewId,user : id,event },
      {
         user : id,
      event , 
      rating : Number(rating),
        comment,
        date
      },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).send({
        message: "Review not found.",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Review successfully updated.",
      success: true,
      event: updatedReview,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something broke!",
      success: false,
      error: error.message,
    });
  }
};

// all reviews for event page
const browseReview = async (req, res) => {
    const {eventId}=req.params;
  try {
    const reviews = await Review.find({event : eventId}).populate('user','name email avatar').sort({ date: 1 });
    return res.status(200).send({
      message: "Reviews fetched",
      reviews,
      success: false,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something broke!",
      success: false,
      error: error.message,
    });
  }
};


// delete review
const deleteReview = async (req, res) => {
  const { id } = req.user;
  const { reviewId } = req.params;

  try {
    if (!id || !reviewId) {
      return res.status(400).send({
        message: "id is required.",
        success: false,
      });
    }

    await Review.findOneAndDelete({_id : reviewId, user : id});

    return res.status(200).send({
      message: "review deleted",
      success: true,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Something broke!",
      success: false,
      error: error.message,
    });
  }
};

module.exports={
    createReview,
    updateReview,
    browseReview,
    deleteReview
}