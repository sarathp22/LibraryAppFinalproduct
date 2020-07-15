const express=require("express");
const loginRouter=express.Router();
const signupdata=require('../model/Signupdata');
function router(nav)
{
    loginRouter.get('/',(req,res)=>{
        var out="";
        res.render('login',{
            nav,
            title:"Login",
            out
        });
    });
    loginRouter.post('/add',(req,res)=>{
        var user=req.body.username;
        var pass=req.body.password;
        signupdata.findOne({username:user,password:pass},(err,i)=>{
            if(i)
            {
                 req.session.test=i;
                //  console.log(req.session.test);
        }
            // console.log(req.session.test);
            // console.log(i.usertype);
        })
        .then((data)=>{
            if(data.username=== user && data.password=== pass)
            {
                res.redirect('/books');
            }
            
        })
        .catch(()=>{
                        var out="Wrong user name or password";
                        res.render('login',{
                            nav,
                            title:"Login",
                            out
                        });

                                });
    });
    return loginRouter;
}
module.exports= router;