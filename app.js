const express = require('express');
const config = require('./config/index.config.js');
const mongoose = require('mongoose');
const YAML = require('yamljs');
require('dotenv').config();
const { swaggerUi } = require('./swagger');
const swaggerDocument = YAML.load('./swagger.yaml');



mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster1.ljowk9k.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=Cluster1`)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));



// Import routes
const schoolRoutes = require('./routes/schoolRoutes')
const classroomRoutes = require('./routes/classroomRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());


app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register API routes
app.use('/api/schools', schoolRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ error: err.message });
});

// Start the server
const PORT = config.dotEnv.PORT || 3000; // Default port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the app for testing or further usage
module.exports = app;
