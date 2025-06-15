const BookEvent = require('../models/bookEvent.model');

// create book event
const createBookEvent = async (req, res) => {
  const {id} = req.params;
  const {email} = req.user;
  try {
    if (!email || !id) {
      return res.status(400).json({
        success: false,
        message: 'email and id are required.'
      });
    }
    const isBooked = await BookEvent.findOne({event : id, userEmail : email})
    if(isBooked){
    return res.status(400).send({
        message: "Event is already booked!",
        success : false
      });
    }
    const newBookEvent = new BookEvent({
      userEmail : email,
      event : id
    });

    const savedBookEvent = await newBookEvent.save();

    return res.status(201).json({
      success: true,
      message: 'Book event created successfully',
      event: savedBookEvent
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while booking',
      error: error.message
    });
  }
};

// my bookings
const myBookEvents = async (req, res) => {
  const { email } = req.user;
  try {
    if (!email) {
      return res.status(400).send({
        message: "Email is required.",
        success: false,
      });
    }
    const bookEvents = await BookEvent.find({ userEmail : email }).populate('event').sort({
      createdAt: -1,
    });
    return res.status(200).send({
      message: "my book events fetched",
      events : bookEvents,
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

// my bookings
const bookEventsIds = async (req, res) => {
  const { email } = req.user;
  try {
    if (!email) {
      return res.status(400).send({
        message: "Email is required.",
        success: false,
      });
    }
    const bookEvents = await BookEvent.find({ userEmail : email }).populate('event',"_id");
    const bookEventsIds = bookEvents.map(book => book.event._id )

    return res.status(200).send({
      message: "Book events ids fetched",
      events : bookEventsIds,
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

// delete book event
const deleteBookEvent = async (req, res) => {
   const {email} = req.user;
   const {id}= req.params;
  try {
    if (!id) {
      return res.status(400).send({
        message: "id is required.",
        success: false,
      });
    }

    await BookEvent.findOneAndDelete({event : id, userEmail : email});

    return res.status(200).send({
      message: "Book event deleted",
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




module.exports = { 
    createBookEvent,
    myBookEvents,
    deleteBookEvent,
    bookEventsIds
};






