const { request } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// making schema for a log for an ai application use
const logSchema = new Schema({
    log: {
       request: {
           type: String,
           required: true
       },
         response: {
              type: String,
              required: true
         }
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// exporting the model

module.exports = mongoose.model('Log', logSchema);

