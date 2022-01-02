const express = require("express");
const app = express();
const faker = require('faker');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("public"));


app.set('views', './views');
app.set('view engine', 'ejs');

let users =[];
for(let i = 0; i<3; i++){
    users.push({
        name:faker.name.findName(),
        email: faker.internet.email(),
        image: faker.image.image()
    })
}

app.get('/', (req, res)=>{
    console.log(users);
    res.render('index',{users})
});
app.get('/form', (req, res)=>{
    res.render('form')
});
app.post("/user/add", (req, res)=>{
    console.log(req.body);
    users.push({
        name: req.body.name,
        email: req.body.email
    })
    res.redirect('/');
})


app.listen(3000,()=>{
    console.log('listening on 3000');
});

