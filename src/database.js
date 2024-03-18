const mongoose = require('mongoose');

const dbConection = async () => {
    try {
        console.log('Conectando a la base de datos...');
        await mongoose.connect('mongodb+srv://juan:0000@cluster0.vpdnwge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a la base de datos.');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
        throw new Error('Error de conexión a la base de datos');
    }
}

module.exports = {
    dbConection
};
