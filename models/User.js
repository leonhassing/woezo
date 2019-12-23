const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  coords: {
    lat: {
      type: Number,
      default: ""
    },
    lng: {
      type: Number,
      default: ""
    }
  },
  birthdate: {
    type: Date,
    default: "08/07/1990"
  },
  phonenumber: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: new Date
  },
  services: {
    cleaning: {
      type: Boolean,
      default: false,
      required: true
    },
    cat: {
      type: Boolean,
      default: false,
      required: true
    },
    dog: {
      type: Boolean,
      default: false,
      required: true
    },
    baby: {
      type: Boolean,
      default: false,
      required: true
    },
    tutor: {
      type: Boolean,
      default: false,
      required: true
    },
    handy: {
      type: Boolean,
      default: false,
      required: true
    },
    it: {
      type: Boolean,
      default: false,
      required: true
    },
    garden: {
      type: Boolean,
      default: false,
      required: true
    },
    music: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  profilepicture: {
    data: Buffer,
    contentType: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
