import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './routes/route.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);

const URL = 'mongodb+srv://jeyakarthick:kar12345@black.uy6ff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || '5000';


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

