const express = require('express');
const app = express();
/*
- handle routing (GET, POST, PUT...)
- server static files
- parse json
- middleware

*/


// set public folder
app.use( express.static('public') )

// view engine
app.set('view engine', 'ejs')
app.set('views', './views')




app.get('/', (req, res) => {
    res.render('index', {title: 'Homepage'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Me'})
})
app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact Me'})
})



// localhost:3000
app.listen(3000, () => {
    console.log('App is running on localhost!')
})


