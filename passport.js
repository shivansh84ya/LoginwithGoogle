const passport = require('passport'); 

const GoogleStrategy = require('passport-google-oauth2').Strategy; 

passport.serializeUser((user , done) => { 
	done(null , user); 
})

passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 



passport.use(new GoogleStrategy({ 
	clientID:"828557900953-mc82npn70hm1866b62rag4n62uef09ee.apps.googleusercontent.com", // Your Credentials here. 
	clientSecret:"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", // Your Credentials here.
	callbackURL:"http://localhost:7000/auth/google/callback", 
	passReqToCallback:true
}, 

function(request, accessToken, refreshToken, profile, done) { 
	return done(null, profile); 
} 
));
