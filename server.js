const app = require('./app');
const mongoose = require('mongoose');
const PORT = 4000;

const db = "mongodb+srv://siddhantkeshari:j3pk9hcecv@cluster0.60hdo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(db).then(() => {
    console.log('Connected to database');
})

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
