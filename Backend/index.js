const express=require("express");
const database=require("./config/database");
const otpRoutes=require("./routes/otp");
const userRoutes=require("./routes/user");
const cookieParser = require("cookie-parser");
const galleryRoutes = require("./routes/gallery");
const blogRoutes = require("./routes/blog");

const app=express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
require("dotenv").config();


const PORT=process.env.PORT||3000;

// Routes
app.use("/api/otp", otpRoutes);
app.use("/api/user", userRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/blog", blogRoutes);

// Database connection
database.connectDB().then(()=>{
    console.log("Database connected successfully");
    app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
}).catch((err)=>{
    console.error("Database connection failed:", err);
    process.exit(1);
});
