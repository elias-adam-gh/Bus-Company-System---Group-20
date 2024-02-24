require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/connectDB');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const verifyRoles = require('./middleware/verifyRoles');

const app = express();
const PORT = process.env.PORT || 3500;

app.use(logger); 
app.use(express.json()); 
app.use(cookieParser()); 
app.use(cors(corsOptions));

connectDB().then(() => console.log('Connected to MongoDB')).catch(err => console.error(`MongoDB connection error: ${err}`));

app.use('/', require('./routes/root')); 
app.use('/users', [verifyRoles('admin')], require('./routes/userRoutes')); 

app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
