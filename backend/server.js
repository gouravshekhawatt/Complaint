const express =  require("express");
const app = express();
const dotenv  =require("dotenv");
const userRoutes = require("./Routes/userRoutes");
const noteRoutes = require("./Routes/noteRoutes");
const mongoose = require('mongoose');
const cors = require("cors");
const {notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;
mongoose.connect(`${DATABASE}`, {
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



app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes );





app.use(notFound)
app.use(errorHandler)

app.listen(5000,console.log(`Server started on PORT ${PORT}`));



