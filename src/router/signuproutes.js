const express=require("express");
const singnupRouter=express.Router();
const Signupdata=require('../model/Signupdata');
const Bookdata = require("../model/Bookdata");
function router(nav)
{
    singnupRouter.get('/',(req,res)=>{
                                        res.render('signup',{
                                                                nav,
                                                                title:'Signup'
                                        });
    });
    singnupRouter.post('/add',(req,res)=>{
    var item={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        gender:req.body.gender,
        dob:req.body.dob,
        address: req.body.address,
        emailid:req.body.emailid,
        phoneno:req.body.phoneno,
        usertype:req.body.usertype,
        username:req.body.username,
        password:req.body.password
    }
    var signup=Signupdata(item);
    signup.save();
    res.redirect('/login');
                                                        });
    return singnupRouter;
}
module.exports= router;