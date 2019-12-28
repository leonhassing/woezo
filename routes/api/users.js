const express = require("express");
const router = express.Router();
const axios = require('axios');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const moment = require("mongodb-moment");
const fs = require('fs');

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        address: "",
        birthdate: null,
        city: "",
        coords: {},
        phonenumber: "",
        description: "",
        password: req.body.password,
        services: {
          cleaning: false,
          cat: false,
          dog: false,
          baby: false,
          tutor: false,
          handy: false,
          it: false,
          garden: false,
          music: false
        },
        originalpicture: {},
        profilepicture: {},
        profileicon: {}
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = {
          id: user.id,
          name: user.name,
          services: user.services
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/users/getprofileinfo
// @desc    Return user based off of user ID
// @access  Private
router.post("/getprofileinfo", (req, res) => {
  User.findById(req.body.userId)
    .exec()
    .then(doc => {
      const response = {
        address: doc.address,
        city: doc.city,
        birthdate: doc.birthdate,
        phonenumber: doc.phonenumber,
        description: doc.description,
        services: doc.services,
        name: doc.name,
        email: doc.email,
        originalpicture: doc.originalpicture,
        profilepicture: doc.profilepicture,
        profileicon: doc.profileicon
      };
      res.status(200).json(response);
    })
    .catch(err => {
      res.json({ error: err });
    });
});

// @route   POST api/users/setprofileinfo   passport.authenticate('jwt', { session: false }),
// @desc    Set profile info
// @access  Public

router.post("/setprofileinfo", (req, res) => {
  passport.authenticate('jwt', { session: false }),
    User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        $set: {
          address: req.body.address,
          birthdate: req.body.birthdate,
          name: req.body.name,
          email: req.body.email,
          city: req.body.city,
          phonenumber: req.body.phonenumber,
          description: req.body.description,
          services: req.body.services,
          originalpicture: req.body.originalpicture,
          profilepicture: req.body.profilepicture,
          profileicon: req.body.profileicon
        }
      }
    )
      .exec()
      .then(doc => {
        res.status(200).json(doc);
      })
      .catch(err => {
        res.json({ error: err });
      });
});

// @route   POST api/users/setgeocoords
// @desc    Set profile info
// @access  Public

router.post("/setgeocoords", (req, res) => {
  if (req.body.address === "") {
    var geocoordsApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.city}&key=AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0`;
  } else {
    var geocoordsApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address},%20${req.body.city}&key=AIzaSyBe-EFdjehTk_14OJIRHrCgnWOU9sZaO-0`;
  }
  axios
    .post(geocoordsApi)
    .then(response => {
      const coords = {
        lat: response.data.results[0].geometry.location.lat,
        lng: response.data.results[0].geometry.location.lng
      }
      if (req.body.userId === '') {
        res.status(200).json(coords)
      } else {
        passport.authenticate('jwt', { session: false }),
          User.findOneAndUpdate(
            { _id: req.body.userId },
            {
              $set: {
                coords: {
                  lat: coords.lat,
                  lng: coords.lng
                }
              }
            }
          )
            .exec()
            .then(
              res.status(200).json(coords)
            )
      }
    })
    .catch(err => {
      res.json({ error: err });
    })
});

// @route   POST api/users/fromservice
// @desc    Get all users who offer a specific service
// @access  Public { 'headers.From': "reservations@marriott.com" } 

router.post("/fromservice", (req, res) => {
  switch (req.body.service) {
    case 'cleaning':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.cleaning': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'cat':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.cat': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'dog':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.dog': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'baby':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.baby': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'tutor':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.tutor': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'handy':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.handy': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'it':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.it': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'garden':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.garden': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    case 'music':
      passport.authenticate('jwt', { session: false }),
        User.find({ 'services.music': true })
          .exec()
          .then(users => {
            res.status(200).json(users)
          })
          .catch(err => {
            res.json({ error: err });
          })
      break;
    default:
      res.json({ error: err });
  }
});



module.exports = router;