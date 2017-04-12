var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

	    fname     : String,
			mname			: String,
      lname     : String,
			NIC	      : String,
			dob				: String,
			address		: String,
      email     : String,
	    type	    : String,
	    username  : String,
      password  : String

});
module.exports = mongoose.model('user', userSchema);
