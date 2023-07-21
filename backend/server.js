const express =  require("express");
const notes = require("./data/notes");
const app = express();
const dotenv  =require("dotenv");
const userRoutes = require("./Routes/userRoutes");
const mongoose = require('mongoose');
const cors = require("cors");
const {notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://gouravsingh2103:123456781@cluster0.gjzjfon.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB database');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});


app.use(express.json());
app.use(cors());
app.get("/", (req,res) => {
    res.send("API is running..");
});

app.get("/api/notes", (req,res) => {
    res.json(notes);
} )

app.use("/api/users", userRoutes);





app.use(notFound)
app.use(errorHandler)

app.listen(5000,console.log(`Server started on PORT ${PORT}`));



