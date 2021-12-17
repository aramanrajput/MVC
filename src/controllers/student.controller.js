const express = require("express")

const router = express.Router()
const app = express()


const Student = require("../models/student.model")
router.get("/",async(req,res)=>{
    try{
          let student = await Student.find().lean().exec()
    
    
        res.status(201).send(student) 
    }catch(e){
    res.status(500).send(e.message)
    }
     
    })
    // student with his personal details who scored the highest mark in the evaluation
router.get("/max",async(req,res)=>{
try{
      let student = await Student.find().lean().exec()
     let max = 0
     let student1 = ""
      student.forEach((e)=>{
          let ans = e.marks
          if(ans>=max){

            max = ans
            student1 = e
          }

      })
    //   console.log(max)
    //   console.log(student1)

    res.status(201).send(student1) 
}catch(e){
res.status(500).send(e.message)
}
 
})

// fetch all students who gave a particular evaluation
router.get("/:id",async(req,res)=>{
    try{
        console.log(req.params.id)
          let student = await Student.find({evaluation_id: {$eq: req.params.id}}).lean().exec()
    
        res.status(201).send(student) 
    }catch(e){
    res.status(500).send(e.message)
    }
     
    })


router.post("/",async(req,res)=>{
    try{
        let student = await Student.create(req.body)
  console.log(req.body)
      res.status(201).send(student) 
  }catch(e){
  res.status(500).send(e.message)
  }
})



module.exports = router