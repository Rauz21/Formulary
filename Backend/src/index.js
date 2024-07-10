const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const formularioRoutes = require('./routes');
const db = require('./db');

const app = express();
const port = 3000;

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type'] // Encabezados permitidos
}));

// Configurar Helmet para mejorar la seguridad, incluyendo CSP
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'https://www.gstatic.com'], // Permitir estilos desde gstatic.com
    // Puedes añadir más configuraciones según sea necesario
  },
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar las rutas definidas en formularioRoutes
app.use('/api', formularioRoutes);


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Verificar la conexión a la base de datos
db.getConnection()
  .then(() => console.log('Database connection successful.'))
  .catch(err => console.error('Database connection failed:', err.message));
