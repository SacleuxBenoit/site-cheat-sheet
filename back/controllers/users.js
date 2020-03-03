// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// Routes

module.exports = {
    register: function(req,res){

        // Params
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;

    },
    login: function(req, res){

    }
}
