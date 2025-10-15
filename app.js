var express = require('express');
var expressLayouts = require('express-ejs-layouts');
const { example, describe } = require('yargs');
const port = 3000;

var app = express();

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Halaman Home',
    describe :"Selamat datang di halaman Home",
    layout : 'layouts/main-layout'
  });
});
app.get('/about', function(req, res) {
  const mahasiswa = [
    {
      'nama' : 'rendy',
      'nim' : '098734761'
    },
    {
      'nama' : 'rudi',
      'nim' : '034234761'
    },
  ]
  res.render('about', {
    title: 'Halaman About',
    describe :"Selamat datang di halaman About",
    mahasiswa,
    layout : 'layouts/main-layout'
  });
});

app.use((req, res)=>{
    res.status(404);
    res.send('<h1>404</h1>')
})
app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`));