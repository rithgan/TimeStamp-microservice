const express = require('express')
const router = express.Router()

router.get('/api/timestamp',(req,res)=>{
  res.send({unix:Date.now(), utc:Date()})
})

router.get('/api/timestamp/:date_string',(req,res)=>{
  if(/\d{5,}/.test(req.params.date_string)){
    const dateInt = parseInt(req.params.date_string)
    res.send({unix:req.params.date_string, utc: new Date(dateInt).toUTCString()})
  }
  const date = new Date(req.params.date_string)
  if(date.toString()==="Invalid Date"){
    res.send({error:"Invalid Date"})
  }
  const unix_date = Math.round(date.getTime())//covnerts date to unix format
  res.send({unix:unix_date,utc:date.toUTCString()}) //converts to UTC string 
})

module.exports= router