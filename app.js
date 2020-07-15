const express= require('express');
const app= new express;
var session = require('express-session');
app.use(session({ secret: 'P74?>WZXwBGPmW#f', resave: true, saveUninitialized: true}));
const nav= [{title:"SIGNUP",link:'/signup'},{title:"LOGIN",link:'/login'},{title:"BOOKS",link:'/books'},{title:"AUTHOR",link:'/author'},{title:"ADD BOOK",link:'/addbook'},{title:"ADD AUTHOR",link:'/addauthor'}];
app.use(express.urlencoded({extented:true}));
const bodyParser = require('body-parser');
// var passport = require('passport');

const booksRouter= require("./src/router/booksroutes")(nav);
const authorRouter=require("./src/router/authorroutes")(nav);
const loginRouter=require("./src/router/loginroutes")(nav);
const signupRouter=require("./src/router/signuproutes")(nav);
const addbookRouter=require("./src/router/addbookroutes")(nav);
const addauthorRouter=require('./src/router/addauthorroutes')(nav);
// 
const upload= require('express-fileupload');

app.use(require('body-parser').urlencoded({ extended: true }));
// app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


app.use(upload());


app.set('view engine', 'ejs');
app.set('views', __dirname+'/src/views');
app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/login',loginRouter);
app.use('/signup', signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use(express.static('./public'));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
                         if(req.session.test)
                         {
                         var data=req.session.test.usertype;
                         }
                         else
                         {
                              var data="unknown";
                         }
                         console.log(data);
                            res.render('index',{
                                                    nav,
                                                    title:"Library App",
                                                    data
                                                         });

});
app.listen(5000);