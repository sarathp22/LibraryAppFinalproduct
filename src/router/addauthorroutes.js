const express=require("express");
const addauthorRouter=express.Router();
const Authordata=require('../model/Authordata');

function router(nav)
{
    addauthorRouter.get('/',(req,res)=>{
        res.render('addauthor',{
            title:"Add Author",
            nav,

        });
    })
    addauthorRouter.post('/add',(req,res)=>{
        var file=req.files.image;
        var filename=file.name;
        file.mv('./public/image/'+filename);
                                    var data={
                                                author:req.body.author,
                                                about:req.body.about,
                                                works:req.body.works,
                                                image:filename
                                                                }
                                    var auth=Authordata(data);
                                    auth.save();
                                    res.redirect('/author');


    });

    return addauthorRouter;
}
    module.exports= router;

