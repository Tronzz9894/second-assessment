const mongoose  = require ('mongoose');
 const userschema = new mongoose.schema({

username: {  type:string,required:true,unique:true1},
email: { type:string , required:true,unique:true},
password:{  type:string, required:true}

});
     const user = mongoose.model('user,userschema');
 
     module.exports =user;