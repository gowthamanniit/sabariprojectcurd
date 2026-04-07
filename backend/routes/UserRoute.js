import express from 'express'
import { create, getAllUsers,getUserById,update,deleteUser } from '../controller/UserController.js'
const route=express.Router()

route.post("/user",create)
route.get("/user",getAllUsers)
route.get("/user/:id",getUserById)
route.put("/user/update/:id",update)
route.delete("/user/delete/:id",deleteUser)
export default route