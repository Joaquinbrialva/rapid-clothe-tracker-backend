const mongoose = require('mongoose');

const { PORT, MONGO_URI, RAPID_CLOTHE_TRACKER_DATABASE } = process.env;

const MONGO_CONNECTION = `${MONGO_URI}/${RAPID_CLOTHE_TRACKER_DATABASE}`

mongoose.connect(MONGO_CONNECTION)
    .then(() => console.log(`Corriendo en el puerto ${PORT}`))
    .then(() => console.log('Conectado a Rapid Clothe Tracker'))
    .catch((error) => console.log(error));