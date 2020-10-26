// require modules for the User model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            require: 'username is require'
        },

        /*
        password:
        {
            type: String,
            dafault: '',
            trim: true,
            required: 'password is required'
        }
        */

        email:
        {
            type: String,
            default: '',
            trim: true,
            require: 'email address is required'
        },

        displayName:
        {
            type: String,
            default: '',
            trim: true,
            require: 'Display Name is required'
        },

        created:
        {
            type: Date,
            default: Date.Now,
        },

        update:
        {
            type: Date,
            default: Date.Now,
        }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
