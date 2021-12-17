const express = require("express")

const router = express.Router()
const app = express()


const Evaluation = require("../models/evaluations.model")


router.get("/",async(req,res)=>{
try{
      let evaluation = await Evaluation.find().populate("instructor").populate("topic").lean().exec()

    res.status(201).send(evaluation) 
}catch(e){
res.status(500).send(e.message)
}
 
})


router.post("/",async(req,res)=>{
    try{
        let evaluation = await Evaluation.create(req.body)
  console.log(req.body)
      res.status(201).send(evaluation) 
  }catch(e){
  res.status(500).send(e.message)
  }
})



module.exports = router