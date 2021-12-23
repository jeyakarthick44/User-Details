const User = require("../model/userSchema");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken")

const getUsers = asyncHandler(async (req, res) => {
    const { name, mobile, email, userName, password, city } = req.body;

//     const userExists = await User.findOne({ email });

//   if (userExists) {
//     res.status(404);
//     throw new Error("User already exists");
//   }

  const user = await User.create({
    name,
    mobile,
    email,
    userName,
    password,
    city,
  });


  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      userName: user.userName,
      password: user.password,
      city:user.city,
    //   token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
  
   res.json({
      name,
      email,
    });
})



// const authUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       pic: user.pic,
//     //   token: generateToken(user._id)
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid Email or Password");
//   }
// });

module.exports = { registerUser,authUser }