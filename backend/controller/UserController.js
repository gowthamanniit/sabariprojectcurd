import User from '../model/UserModel.js'
//insert
export const create=async(req,res)=>{
  try
  {
    const newUser=new User(req.body)
 
    const {email}=newUser
    const userExist = await User.findOne({email})
    if (userExist){
        return res.status(400).json({message:"User Already exist"})
    }
    const saveData=await newUser.save()
    //res.status(200).json(saveData)
    res.status(200).json({message:"user created successfully"})
  }

  catch(err){
    res.status(500).json({errormessage:err.message})
  }

}

// get all users data

export const getAllUsers = async(req,res)=>{
  try{
      const alluser=await User.find();
      if(!alluser || alluser.length===0 )
      return res.status(404).json({message:"user data not found"})

      res.status(200).json(alluser)
  }
  catch(error){
    res.status(500).json({errormessage:error.message})
  }
}

//  get user by id

export const getUserById = async (req,res)=>{
  try
  {
    const id=req.params.id
    const userExist=await User.findById(id)
    if(!userExist){
    return res.status(400).json({"message":"user not found"})
    }
    res.status(200).json(userExist)
  }
  catch(error){
    res.status(500).json({errormessage:error.message})
  }
}

// update
export const update=async(req,res)=>{
  try
  {
    const id=req.params.id
    const userexist=await User.findById(id)
    if(!userexist)
    return res.status(404).json({"message":"user not found"})

    const updatedata=await User.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({"message":"sucessfully updated"})

  }
  catch(error){
    res.status(500).json({errormessage:error.message})
  }
}

// delete

export const deleteUser=async(req,res)=>{
  try{
  const id=req.params.id
  const userExist= await User.findById(id)
  if(!userExist)
  return res.status(404).json({"messaage:":"User Not Found"})

  const delData=await User.findByIdAndDelete(id)
  res.status(200).json({"message":"user deleted success"})
  }
  catch(error){
    res.status(500).json({errorMessage:error.message})
  }

}









