const express = require("express")

const router = express.Router()
const app = express()


const User = require("../models/user.model")


router.get("/",async(req,res)=>{
try{
      let user = await User.find().lean().exec()

    res.status(201).send(user) 
}catch(e){
res.status(500).send(e.message)
}
 
})


router.post("/",async(req,res)=>{
    try{
        let user = await User.create(req.body)
  console.log(req.body)
      res.status(201).send(user) 
  }catch(e){
  res.status(500).send(e.message)
  }
})



module.exports = router


