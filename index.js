var express = require('express');
var app = express();
var PORT = 3000;
var data = require('./data/data.json')

//this is the public folder on path images
app.use(express.static('public'))

//this is for images folder on path images
app.use('/images', express.static('images'))

app.get("/", (req, res)=>
    // get data
    res.json(data)
);

app.get("/item/:id", (req, res, next)=>{
    let user = Number(req.params.id) - 1;
    console.log(data[user]);
    res.send(data[user])
    next();
}, (req, res)=> {
    console.log("Did you get the right data?");
});

app.get('/images', (req, res)=>{
    res.download("images/rocket.jpg")
    // res.redirect("https://www.facebook.com/")
    // res.end()
})

app.post('/postit', (req, res)=>
    res.send("a post request has been made")
)

app.put('/putit', (req, res)=>
    res.send("a put request has been made")
)

app.delete('/deleteit', (req, res)=>
    res.send("a delete request has been made")
)

app.listen(PORT, ()=>{
    console.log(`Your server is running on port ${PORT}`);
})