const User = require("../model/userModel");
const asyncHandler = require("express-async-handler");

// const generateToken = require("../utils/generateToken")
// const { 
//   v4: uuidv4,
// } = require('uuid');

// let users = [];

// const getUsers = (req,res) => {
//   res.send(users);
// }

// const createUser = (req,res) => {
//   const user = req.body;

//   users.push({user})
//   res.send("user added")
    
// }


// const getUser = (req,res) => {
//   const singleUser = users.filter((user) => user.id === req.params.id )
//   res.send(singleUser)

// }

// const deleteUser = (req,res) => {
//    users = users.filter((user) => user.id !== req.params.id )
//   res.send("deletingUser")

// }

// const updateUser = (req,res) => {
//   const user = users.find((user) => user.id === req.params.id )

//   user.name = req.body.name
//   user.email = req.body.email
//   user.phone = req.body.phone
//   user.city = req.body.city

//   res.send("updated")
// }

// module.exports = { getUsers,createUser,getUser,updateUser,deleteUser}

const getUsers = asyncHandler(async (req, res) => {
    // const { name, mobile, email, userName, password, city } = req.body;
    const users = await User.find()
    res.json(users)
});

const createUser = asyncHandler(async (req, res) => {
    const { name, mobile, email, userName, password, city } = req.body;

    const user = new User({ name, mobile, email, userName, password, city })

    const createdUser = await user.save()
    res.status(201).json(createdUser)
  });

  const getUserById = asyncHandler(async (req, res) => {

  const user = await User.findById(req.params.id )
    res.json(user)
});

const updateUser = asyncHandler(async (req, res) => {
  const { name, mobile, email, userName, password, city } = req.body;
  const user = await User.findById(req.params.id )
  if(user){
    user.name,
    user.mobile,
    user.email,
    user.userName,
    user.password,
    user.city

    const updateUser = await user.save()
    res.json(updateUser)
  }

});

const deleteUser = asyncHandler(async (req, res) => {

  const user = await User.findById(req.params.id )

  await note.remove();
    res.json("removed")
});



module.exports = { createUser,getUsers,getUserById,updateUser,deleteUser }


//     if(userExists){
//       res.status(400)
//       throw new Error("error")
//     }

//     const user = await User.create({
//       name,
//       mobile,
//       email,
//       userName,
//       password,
//       city,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         mobile: user.mobile,
//         email: user.email,
//         userName: user.userName,
//         password: user.password,
//         city:user.city,
//       //   token: generateToken(user._id)
//       });
//     } else {
//       res.status(400);
//       throw new Error("User not found");
//     }
    
//   })

// module.exports = { createUser }


  






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

