const express = require("express")

const router = express.Router()
const app = express()


const Topic = require("../models/topic.model")


router.get("/",async(req,res)=>{
try{
      let topic = await Topic.find().lean().exec()

    res.status(201).send(topic) 
}catch(e){
res.status(500).send(e.message)
}
 
})


router.post("/",async(req,res)=>{
    try{
        let topic = await Topic.create(req.body)
  console.log(req.body)
      res.status(201).send(topic) 
  }catch(e){
  res.status(500).send(e.message)
  }
})



module.exports = router