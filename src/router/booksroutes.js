const express= require("express");
const booksRouter=express.Router();
const bookdata =require('../model/Bookdata');
function router(nav)
{
    // var books=[
    //                 {title:"Nalukettu", author:"M T Vasudevan nair", genre:"novel",image:"nalukettu.jpg" },
    //                 {title:"Kayar", author:"Thakazhi Shiva Shankara Pilla", genre:"novel",image:"kayar.jpg"  },
    //                 {title:"Khasakhinte Ithihasam", author:"O V Vijayan", genre:"novel",image:"khasakkinteithihasam.jpg" }
    //                         ];


    booksRouter.get('/',(req,res)=>{
        if(req.session.test)
        {
        var data=req.session.test.usertype;
        }
        else{
            res.redirect('/login')
            }
                        bookdata.find()
                        .then((books)=>
                        {
                            res.render('books',{
                                nav,
                                books,
                                title:"Books",
                                data

                                        });
                });
                        })
     booksRouter.post('/update',(req,res)=>{

                                   var titlem=req.body.title;
                                   var authorm=req.body.author;
                                   var genrem=req.body.genre;
                                   var image=req.body.image;//hidden
                                   var id=req.body.id;
                                   if(req.files==null)
                                   {
                                        var filename=image;
                                   }
                                   else{
                                    var file=req.files.image1;
                                    var filename=file.name;
                                    file.mv('./public/image/'+filename);
                                    // console.log(file);
                                }
                                    
                                    
                                   bookdata.update({_id:id},{$set:{title:titlem,author:authorm,genre:genrem,image:filename}},{multi:true})
                                   .then(()=>{
                                       res.redirect('/books');
                                   })
                                                
     });    

    booksRouter.get('/delete/:id',(req,res)=>{
                                                var id=req.params.id;
                                                bookdata.remove({_id:id})
                                                .then(()=>{
                                                    res.redirect('/books'); 
                                                });
    });            
                                        
    booksRouter.get('/:id',(req,res)=>
                                    {
                                        var id=req.params.id;
                                        if(req.session.test)
        {
        var data=req.session.test.usertype;
        }
        else{
            res.redirect('/login')
            }
                                        bookdata.findOne({_id:id})
                                        .then((book)=>{
                                            res.render('book',{
                                                nav,
                                                book,
                                                title:"book",
                                                data
                                            });
                                        })
                                        
                                                    });

            return booksRouter;
}






module.exports= router;