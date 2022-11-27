const express = require("express")
const TvModel = require("../Schema/tv.model")

const app = express.Router()

app.get("/",async(req,res)=>{

    const tv = await TvModel.find()
    res.send(tv)
    
})

app.get("/singlepage",async(req,res)=>{

    const {id} = req.query
    const tv = await TvModel.findOne({_id:id})
    res.send(tv)
})

module.exports = app 