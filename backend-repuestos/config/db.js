const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://luisposada:12345@cluster0.1b07q.mongodb.net/omniapdb?retryWrites=true&w=majority', {
      dbName: 'omniapdb',
    });
    console.log('Conexión a MongoDB exitosa');
  } catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
