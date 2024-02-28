const mongoose = require('mongoose');

const { PORT, MONGODB_STRING } = process.env;

mongoose.connect(MONGODB_STRING).then(() => console.log(`Corriendo en el puerto ${PORT}`))
    .then(() => console.log('Conectado a Rapid Clothe Tracker'))
    .catch((error) => console.log(error))