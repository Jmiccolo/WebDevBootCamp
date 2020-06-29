var express 			  = require("express"),
    app 				  = express(),
	mongoose 			  = require("mongoose"),
	passport 			  = require("passport"),
	bodyParser 			  = require("body-parser"),
	User 				  = require("./models/user"),
	LocalStrategy 		  = require("passport-local"),
	passportLocalMongoose = require("passport-local-mongoose");

// connect to Mongoose
mongoose.connect("mongodb://localhost:27017/auth_demo", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// set view engine
app.set("view engine", "ejs");
// bodyparser
app.use(bodyParser.urlencoded({extended:true}));
// create session
app.use(require("express-session")({
	secret:"I will always love juice.",
	resave: false,
	saveUninitialized: false
}));
// passport session
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes
// ====================
// Home
app.get("/", function (req, res){
	res.render("home");
});
// Secret
app.get("/secret", isLoggedIn, function(req, res){
	res.render("secret");
});
// Auth Routes
// Register
app.get("/register", function(req,res){
	res.render("register")
});
app.post("/register", function(req, res){
	req.body.username
	req.body.password
	User.register(new User({username: req.body.username}), req.body.password, function(err, user){
		if(err){
			console.log(err);
			return res.render("register");
		} else{
			passport.authenticate("local")(req, res, function(){
				res.redirect("/secret");
			});
		}
		
	})
});
// Login
app.get("/login", function(req, res){
	res.render("login");
});
app.post("/login", passport.authenticate("local",{
	successRedirect:"/secret",
	failureRedirect:"/login"
}),function(req, res){
});
app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});

// Middleware
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.listen(3000, function(){
	console.log("server started");
});