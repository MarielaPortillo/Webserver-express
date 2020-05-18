


const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;

 
//cualquier URL puede tener acceso 
app.use(express.static(__dirname +'/public'));

//Express HBS 
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




//unicamente la URL que le indiquemos tendra el acceso
app.get('/',  (req, res) => {
 
    res.render('home', {
        nombre: 'Ruth'
       
    });
});
 
app.get('/about',  (req, res) => {
 
    res.render('about');
});
 


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});