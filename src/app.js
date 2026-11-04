const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express();

const healthRoutes = require('./routes/healthRoutes');


app.use(cors());
app.use(express.json());
app.use('/api/health', healthRoutes);

app.get('/',(req,res) => {
    res.status(200).json({
        success:true,
        message:"E-commerce API is working"

    });
});

app.listen(3000);