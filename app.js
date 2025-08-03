const express = require('express');
const app = express();

// set public folder
app.use( express.static('public') )

// set view engine and folder with views
app.set('view engine', 'ejs')
app.set('views', './views')


// ROUTING
/*
    app.TypRequestu(adresa, (req, res) => {
        
        Co sa ma stat po requeste
        vsetko o requeste je v req objekte (request)
        vsetko co chceme poslat naspat davame do res objekut (response)
        Naspat uzivatelovi posielame 

        res.render('Lokacia view ktory chceme rendernut', {dynamicke data})
        
        })

*/


app.get('/', (req, res) => {
    res.render('index', {title: 'Homepage'})
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Me'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact Me'})
})



/* Zapnut Aplikaciu na localhost */

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`)
})


