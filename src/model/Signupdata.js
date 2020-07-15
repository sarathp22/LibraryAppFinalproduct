const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true });
const Schema=mongoose.Schema;
const SignupSchema= new Schema ({
                        firstname:String,
                        lastname:String,
                        gender:String,
                        dob:Date,
                        address: String,
                        emailid:String,
                        phoneno:Number,
                        usertype:String,
                        username:String,
                        password:String,
                                            });
var Signupdata=mongoose.model('signup',SignupSchema);
module.exports= Signupdata;