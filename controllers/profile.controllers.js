const Event = require("../models/event.model");
const MyBooking = require("../models/myBooking.model");
const Profile = require("../models/profile.model");



const profile = async (req, res) => {
  const {id,email}=req.user;
 
  try {
    const profile = await Profile.find({user : id})
    // calculate participated
    const myBookings = await MyBooking.find({email}).populate('event','date time');
    const eventsPaticipated = 0;
    myBookings.forEach(({event})=>{
      const {date,time}=event;
      const dateTimeString = `${date} ${time}`;
      const eventDateTime = new Date(dateTimeString);
      const now = new Date();
      if(eventDateTime < now){
        eventsPaticipated++
      }
    })
    
    const events = await Event.find({'organizer.email' : email});
    const eventsOrganized = 0;
    const totalParticipants = 0;
    events.forEach((event)=>{
      const {date,time}=event;
      const dateTimeString = `${date} ${time}`;
      const eventDateTime = new Date(dateTimeString);
      const now = new Date();
      if(eventDateTime < now){
        eventsOrganized++
        totalParticipants += event.participants;
      }
    })
    
    return res.status(200).send({
      message: "Event successfully created.",
      profile,
      stats : {eventsPaticipated,eventsOrganized,totalParticipants},
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


const updateProfile = async (req, res) => {
  const {id}=req.user;
  const {
    experties,
    bio,
    phone,
    location,
    dob
  } = req.body; 


  try {
    const createProfile = new Profile({
    user : id,
    experties,
    bio,
    phone,
    location,
    dob
    });

    await createProfile.save();
    
    return res.status(201).send({
      message: "Profile update successfull.",
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

module.exports ={
    profile,
    updateProfile
}