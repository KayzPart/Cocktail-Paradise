const express = require('express')
const ratingRoute = express.Router()

let RatingModel = require('../models/Rating')

// Création de la première route
// View all ratings (req = requête, res = response)
ratingRoute.route('/rating').get((req, res) => {
    RatingModel.find((err, data) => {
        if(err){
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

module.exports = ratingRoute