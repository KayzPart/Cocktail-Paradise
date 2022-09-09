const express = require('express')
const userRoute = express.Router()

let UserModel = require('../models/User')

// Rating for user
userRoute.route('/').get((req, res) => {
  UserModel.find((err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
    }
  })
})

userRoute.route('/create-user').post((req, res, next) => {
  UserModel.create(req.body, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
    }
  })
})

userRoute.route('/edit-user/:id').get((req, res) => {
  UserModel.findById(req.params.id, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
    }
  })
})

// Update User
userRoute.route('update-user/:id').post((req, res, next) => {
  UserModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data) => {
    if (err) {
      return next(err)
    } else {
      res.json(data)
      console.log('L\'user à été modifier avec succès')
    }
  })
})

// Delete User
userRoute.route('delete-user/:id').delete((req, res, next) => {
  UserModel.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute