const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);

mongoose.connection.on('connected', () => {
    console.log(`MongoDB connected`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Error while connecting to MongoDB: ${err}`);
    process.exit(1);
});
