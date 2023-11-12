const mongoose = require("mongoose");
const Db = "mongodb+srv://<username>:<password>@cluster0.pmvtwtt.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Connected to MongoDB")
};

module.exports = connectDB;
