var express = require('express');
var app = express();
var PORT = 3000;
var data = require('./data/data.json')

//Simple NodeJs Tests
var hello ="Hello world from Node JS"
var justNode = hello.slice(17)
//console.log(`Rock on World from ${justNode}`);
//console.log(__dirname);
//console.log(__filename);

var path = require('path')
// console.log(`Rock on World from ${path.basename(__filename)}`);



//this is the public folder on path images
app.use(express.static('public'));

// method to use JSON
// app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Proxies
app.set('trust proxy', 'loopback');

//this is for images folder on path images
app.use('/images', express.static('images'))


app.get("/", (req, res)=>
    // get data
    res.json(data)
);

//JSON data
//{"Hello": "JSON is cool"}
//URL Encoded DATA
// hello=URLEncoded+is+cool

app.post("/newItem", (req, res)=>{
    console.log(req.body);
    res.send(req.body);
})

//Middleware Example

app.get("/item/:id", (req, res, next)=>{
    //This is the middleware that pulls data
    let user = Number(req.params.id) - 1;
    console.log(data[user]);
    //middleware that uses the req object
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    //everything above is middleware
    res.send(data[user])
    next();
}, (req, res)=> {
    console.log("Did you get the right data?");
});

app.get('/images', (req, res)=>{
    // res.download("images/rocket.jpg")
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

/*Chaining */

app.route('/chain').get((req, res) => {
    throw new Error();
    res.send("A get request was made");
}).put((req, res) => {
    res.send("A Put Request was made")
    console.log("Put It")
}).delete((req, res) => {
    res.send("A Delete Request was made")
    console.log("Delete It")  
})

/*Error Handling function */
app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send(`Red alert!!Red alert!!: ${err.stack}`)
})


/*PORT */
app.listen(PORT, ()=>{
    console.log(`Your server is running on port ${PORT}`);
})