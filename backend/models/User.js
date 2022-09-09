const mongoose = require('mongoose')
const { Schema } = mongoose
let UserSchema = new Schema({
    pseudo: {
        type: String
    },
    email: {
        type: String
    },
    mdp: {
        type: String
    }
},{
    collection: 'users'
})

module.exports = mongoose.model('User', UserSchema)