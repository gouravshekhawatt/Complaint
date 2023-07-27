const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateTokens");

const registerUser = asyncHandler(async (req, res) => {
  const { name, UserId, division, location, gender, email, password , number,myid } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    UserId,
    myid,
    division,
    location,
    number,
    gender,
    email,
    password,
   
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      myid: user.myid,
      name: user.name,
      number: user.number,
      email: user.email,
      UserId: user.UserId,
      division: user.division,
      location: user.location,
      gender: user.gender,

      isAdmin: user.isAdmin,
    
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }

  // res.json({
  //     name, email
  // })
});

// for login

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      myid: user.myid,
      name: user.name,
      email: user.email,
      number: user.number,
      UserId: user.UserId,
      division: user.division,
      location: user.location,
      gender: user.gender,

      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});




///Update User Profile//

const updateUserProfile  =  asyncHandler(async (req, res) => {

const user =  await User .findById(req.user._id);

if(user){

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.myid = req.body.myid || user.myid;
  user.number = req.body.number || user.number;
  
  user.division = req.body.division || user.division;
  
 

  if(req.body.password){

    user.password = req.body.password
  }

  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    myid: updatedUser.myid,
    name: updatedUser.name,
    email: updatedUser.email,
    number: updatedUser.number,
    UserId: updatedUser.UserId,
    division: updatedUser.division,
    location: updatedUser.location,
    gender: updatedUser.gender,

    isAdmin: user.isAdmin,
    token: generateToken(user._id),

  });
}

  else{
    res.status(404)
    throw new Error ("User not Found!!");
  }




});



module.exports = { registerUser, authUser , updateUserProfile };
