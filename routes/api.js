const express = require('express');

const router = express.Router()
router.use(express.json())

let residentCollection = require('../models/ResidentSchema')
//Display All Residents
router.get('/',(req,res)=>{
    // res.send(`Find All Residents`)
    residentCollection.find({},(errors, results)=> {
        if (errors)
        {res.send(errors);}
        else
        {res.send(results);}
    })

})

//Find Residents by Phone Number
router.get('/:firstName',(req,res)=>{
    // res.send(`Find one resident by first name`)
    residentCollection.findOne({firstName:req.params.firstName}, (errors, results)=> {
        if (errors)
        {res.send(errors);}
        else
        {res.send(results);}
    })
})

//Find Single Residents by boolean
router.get('/:single',(req,res)=>{
    // res.send(`Find single residents`)
    residentCollection.find({single:req.params.single} )
})

//Find Residents by Last Name
router.get('/:lastName',(req,res)=>{
    // res.send(`Find Residents by last name`)
    residentCollection.find({lastName:req.params.lastName},(errors, results)=> {
        if (errors)
        {res.send(errors);}
        else
        {res.send(results);}
    })
})

// Delete Resident by Phone name
router.delete('/:phoneNumber',(req,res)=>{
    // res.send(`Delete Rsidents by phone number`)
    residentCollection.findOneAndDelete({phoneNumber:req.params.phoneNumber},req.body,(errors, results)=> {
        if (errors)
        {res.send(errors);}
        else
        {res.send(`Resident with phone number ${req.params.phoneNumber} was deleted`);}
    })
})

//Update User by Phone Number
router.put('/:phoneNumber',(req,res)=>{
    // res.send(`Update Residents by phone number`)
    residentCollection.findOneAndUpdate({phoneNumber:req.params.phoneNumber},req.body,(errors, results)=> {
        if (errors)
        {res.send(errors);}
        else
        {res.send(results);}
    })
})

//Create a new Resident

router.post('/',(req,res)=>{
    // res.send(`Create a new resident`)
    residentCollection.create(req.body,(errors, results)=> {
        if (errors)
        {res.send(errors);}
        else
        {res.send(results);}
    })
})
module.exports = router;