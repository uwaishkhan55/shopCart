const route = require('express').Router()
const passport = require('passport')
const {Products}=require("../db")
const db=require("../db")
route.get('/',async (req,res)=>
{
  if (!req.user) {
    console.log("not a user"+req.url)
    return res.redirect('/login')
    
  }
  console.log(" a user" +req.url)
      res.render('cart')
})
module.exports = {
    route
  }