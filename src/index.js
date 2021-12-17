const express = require("express")

const app = express()
 

const userController = require("./controllers/user.controller")
const studentController = require("./controllers/student.controller")
const topicController = require("./controllers/topic.controller")
const evaluationController = require("./controllers/evaluation.controller")
app.use(express.json())
app.use("/user",userController)
app.use("/student",studentController)
app.use("/topic",topicController)
app.use("/evaluation",evaluationController)

module.exports = app