const app = require('./app');
const { dbConection } = require('./database');

async function main() {
    try {
        // Conexión a la base de datos
        await dbConection();
        // Inicialización del servidor
        await app.listen(4000);
        console.log('Servidor en ejecución en el puerto 4000...');
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

main();
