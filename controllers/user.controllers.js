const User = require('../models/user.model');
const { isValidPassword } = require('../utilities/password-validator');

// register user
const userRegister = async (req, res) => {
  try {
    const { name,avatar, email, password,cPassword } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist) {
    return res.status(400).send({errors : [{
        message: "email is already exist!",
        field: "email",
      }]});
    } 
    if(password === cPassword){
        return res.status(400).send({
        message: "Password is not match!",
        success : false
      });
    }
    const passwordValidation = isValidPassword(password);
    if (!passwordValidation.valid) {
    return res.status(400).send({
        message: passwordValidation.message,
        success : false
      });
    }
    
      const hash = await bcrypt.hash(password, 10);
      const newUser = new User({
        name,
        email,
        password: hash,
        avatar
      });
      await newUser.save();
    return  res.status(201).send({
        success : true, 
        message: "Register completed" 
    });
    
  } catch (error) {
    return  res.status(500).send({
      message: "somthing broke!",
      success : false
    });
  }
};
// login user : email and password
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  
    try {
        const isExist = await User.findOne({ email });
    if (!isExist) {
      return res.status(404).send({
        message: "Invalid email",
        success : false
      });
    }

    const existedUser = await bcrypt.compare(password, isExist.password);
    if (!existedUser) {
      return res.status(401).send({ 
        message: "Wrong password!", 
        success : false
      });
    }
    const accessToken = jwt.sign(
      {
        id: isExist._id, email : isExist.email
      },
      process.env.JWT_ACCESS_TOEKN,
      { expiresIn: "30m" }
    );
    
    res.cookie("accesstoken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 30,
    });

    return res.status(200).send({
      message: "Logged in successfully",
      success: true,
    })
    } catch (error) {
        return  res.status(500).send({
            message: "somthing broke!",
            success : false
        });
    }
};

// login user : google


module.exports={
     userRegister,
     userLogin
}