let mongoose = require('mongoose');

let bcrypt = require('bcrypt-nodejs');


let userShema = mongoose.Schema({

    email : {type: String,unique:true,required:true},

    birthYear: {type:Number,required:true},

    gender : {type:String,required:true},

    password : {type:String,required:true}
});


userSchema.pre('save', function(next){

	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.hash(user.password,null,null,function(err,hash){

		 	if(err) return next(err);

		 	user.password=hash;

		 	next();

	});



});





userSchema.methods.comparePassword=function(password){

	var user = this;

	return bcrypt.compareSync(password, user.password);
}

//Return schema

module.exports = mongoose.model('User',userSchema);
