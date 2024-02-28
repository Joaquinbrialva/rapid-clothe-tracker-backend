const mongoose = require('mongoose');

const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI).then(() => console.log(`Corriendo en el puerto ${PORT}`))
    .then(() => console.log('Conectado a Rapid Clothe Tracker'))
    .catch((error) => console.log(error))