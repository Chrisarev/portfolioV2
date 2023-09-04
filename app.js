if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
} ///environment variable that is either in dev or production mode

const express = require('express');
const path = require('path');
const mongoose = require('mongoose') ///for connecting to mongoDB
const mongoSanitize = require('express-mongo-sanitize') ///prevents mongo injection
const Comment = require('./models/comment')

/***************** DATABASE CONFIG *****************/
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});///creates db yelp-camp(or connects to it if already made)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database Connected")
});///checks to see if connected and handles db connection error

/***************** MIDDLEWARE CONFIG *****************/
const app = express();
app.use(express.json({limit:"50mb"}))

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({ extended: true })) ///allows us to get req.params 
app.use(mongoSanitize()) ///prevents users from inputting characters that could result in mongo injection

/*** HTTP -> HTTPS IN ORDER TO USE SSL CERTIFICATE ***/
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(`https://${req.header('host')}${req.url}`)
  } else {
    next();
  }
});

app.post('/api/postComment', async (req,res) =>{
  try{
    const {name,phone,email,message} = req.body; 
    const comment = new Comment({name,phone,email,message});
    await comment.save(); 
  } catch (e){
    console.log('Failed to submit comment')
    res.sendStatus(500); 
  }
})

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+ '/public/index.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serving on port: ${PORT}`)
})