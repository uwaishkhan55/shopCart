const route = require('express').Router()
const passport = require('passport')
const {Products,CartItems}=require("../db")
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const db=require("../db")
route.get('/',async (req,res)=>
{
  if (!req.user) {
    console.log("not a user"+req.url)
    return res.redirect('/login')
    
  } 
  res.render('cart')
  
})
module.exports = {
    route
  }