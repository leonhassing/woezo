const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

// Load User model
const User = require('../../models/User');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        address: '',
        birthdate: '08/07/1990',
        city: '',
        phonenumber: '',
        description: '',
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
        }
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
router.post('/login', (req, res) => {
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
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, services: user.services }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/users/getpersonalinfo
// @desc    Return user based off of user ID
// @access  Private
router.post(
  '/getpersonalinfo', (req, res) => {
    User.findById(req.body.userId)
      .exec()
      .then(doc => {
        res.status(200).json(doc)
      })
      .catch(err => {
        res.json({ error: err })
      })
  }
);

// @route   POST api/users/services   passport.authenticate('jwt', { session: false }),
// @desc    Tests users route
// @access  Public
router.post('/services', (req, res) => {
  User
    .findOneAndUpdate({ '_id': req.body.userId }, { $set: { 'services': req.body.services } })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ error: err })
    })
});

// @route   POST api/users/
// @desc    Tests users route
// @access  Public
router.post('/setpersonalinfo', (req, res) => {
  console.log('hier')
  User
    .findOneAndUpdate({ '_id': req.body.userId }, {
      $set: {
        'address': req.body.address,
        'birthdate': new Date(req.body.birthdate),
        'city': req.body.city,
        'phonenumber': req.body.phonenumber,
        'description': req.body.description
      }
    })
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.json({ error: err })
    })
});

module.exports = router;