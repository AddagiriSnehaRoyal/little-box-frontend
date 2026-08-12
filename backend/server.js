require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const packageRoutes = require("./routes/packageRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/packages", packageRoutes);
app.use("/api/upload", uploadRoutes);



app.get("/", (req, res) => {
    res.send("Little Box of Love Backend is Running ❤️");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});