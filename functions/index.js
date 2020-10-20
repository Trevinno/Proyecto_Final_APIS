const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');



exports.api = functions.https.onRequest(app);