const passport = require('passport');
const sql = require("mssql");

module.exports = (app) => {
    /**
     * Router routing back to this path when returned from gogole
     */  
    app.get('/auth/google', passport.authenticate('google',{
        scope: ['profile', 'email']
    }) 
    );
    /**
     * Callback router and will take us back to passport.use google strategy
     */
    app.get('/auth/google/callback', passport.authenticate('google'));
}
