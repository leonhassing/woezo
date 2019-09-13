const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.city = !isEmpty(data.city) ? data.city : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.postalcode = !isEmpty(data.postalcode) ? data.postalcode : '';
  //data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = 'username needs to between 2 and 40 characters';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Profile username is required';
  }

  if (Validator.isEmpty(data.city)) {
    errors.city = 'City field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }

  if (Validator.isEmpty(data.postalcode)) {
    errors.postalcode = 'Postalcode field is required';
  }

  //if (Validator.isEmpty(data.skills)) {
  //  errors.skills = 'Skills field is required';
  //}

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
