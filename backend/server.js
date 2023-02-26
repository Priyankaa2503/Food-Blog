const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes")
const app =express();
dotenv.config();
connectDB();
app.use(express.json());

const PORT =process.env.PORT || 3002;
app.listen(PORT, console.log(`server started on port ${PORT}`));



app.get('/',(req,res)=>{
    res.send("API is running..");
});
// app.get('/api/notes',(req,res)=>{
//     res.json(notes);
// });
// app.get("/api/notes/:id",(req,res)=>{
//     const note = notes.find((n)=>n._id === req.params.id);
   
//     res.send(note);
// });

app.use("/api/notes",noteRoutes);