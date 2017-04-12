var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var UH       = require('./modules/userHandaling');
module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index');
	});
	app.get('/login', function(req, res) {
		if (req.cookies.user == undefined || req.cookies.pass == undefined){
				res.render('index', { title: 'Hello - Please Login To Your Account' });
	  }else{
	// attempt automatic login //
			UH.autoSignIn(req.cookies.user, req.cookies.pass, function(o){
				if (o != null){
				  req.session.user = o;
					res.redirect('/home');
				}	else{
					res.render('index', { title: 'Hello - Please Login To Your Account' });
				}
			});
		}
		res.render('index');
	});
	app.post('/login', function(req, res){
		console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa"+req.body['username']);
	UH.manualSignIn(req.body['username'], req.body['password'], function(e, o){
			//console.log(o);
		if (!o){
			res.status(400).send(e);
		}	else{
			req.session.user = o;
			if (req.body['remember-me'] == 'true'){
				res.cookie('username', o.user, { maxAge: 900000 });
				res.cookie('password', o.pass, { maxAge: 900000 });
			}
			res.redirect('/home');
		}
	  });
   });

};
