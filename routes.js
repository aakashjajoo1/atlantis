// Imports
var db = require('./database.js');


// Routes
// GET / - displays home page
var getHome = function(req, res) {
	res.render('home.ejs');
}


// Exports
var routes = {
	get_home: getHome,
};
module.exports = routes;