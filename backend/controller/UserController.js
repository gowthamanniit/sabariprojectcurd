import User from '../model/UserModel.js'
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