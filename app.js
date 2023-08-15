if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
} ///environment variable that is either in dev or production mode

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json({limit:"50mb"}))

/*** HTTP -> HTTPS IN ORDER TO USE SSL CERTIFICATE ***/
app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`)
    } else {
      next();
    }
});

app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded({ extended: true })) ///allows us to get req.params 

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+ '/public/index.html'))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serving on port: ${PORT}`)
})

