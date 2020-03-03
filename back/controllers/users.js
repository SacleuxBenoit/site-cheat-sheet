// Imports
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../models')

// Routes

module.exports = {
    register: function(req,res){

        // Params
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const password = req.body.password;

        if(email == null || firstname == null || lastname == null || password == null){
            return res.status(400).json({'error' : 'missing parameters'})
        }
    },
    login: function(req, res){

    }
}
