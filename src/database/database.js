const mongoose = require('mongoose');

const { RAPID_CLOTHE_TRACKER_HOST, RAPID_CLOTHE_TRACKER_DATABASE } = process.env;

const MONGODB_URI = `mongodb://${RAPID_CLOTHE_TRACKER_HOST}/${RAPID_CLOTHE_TRACKER_DATABASE}`;

mongoose.connect(MONGODB_URI).then(db => {
    console.log('DB is connected');
}).catch(err => {
    console.log(err);
});