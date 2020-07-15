const express=require("express");
const addbookRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav)
{
    addbookRouter.get('/',(req,res)=>{
                                        res.render('addbook',{
                                                                nav,
                                                                title:"Add Book"
                                        });
    });
    addbookRouter.post('/add',(req,res)=>{
                    var file=req.files.image;
                    var filename=file.name;
                    file.mv('./public/image/'+filename);
                            var item={
                                            title: req.body.title,
                                            author: req.body.author,
                                            genre: req.body.genre,
                                            image: filename
                                                                }
                                       var book= Bookdata(item);
                                       book.save();
                                       res.redirect('/books');
                            res.send("Hai");
    });
    return addbookRouter;
}
module.exports= router;