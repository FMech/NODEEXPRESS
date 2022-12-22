const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3001
//parse Jason using Express
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
let movies = [{
    id: '1',
    name: 'Inception',
    date: '2010-8-7',
    author: ' Christopher Nolan'
},
{
    id: '2',
    name: 'and then there were none',
    date: '2015-26-12',
    author: 'Agatha christy'
},
];
//search for a movie
app.get('/movie/:id', (req, res) => {
    const id = req.params.id
    for (let movie of movies) {
        if (movie.id == id) {
            res.json(movie)
            return
        }

    }
    res.statusCode(404).send("movie not found")
})
//get the movie list in Jason Format
app.get('/movie', (req, res) => {
    res.json(movies)
})
// remove a movie from the list
app.delete('/movie/:id',(req,res)=>{
const id =req.params.id
movies =movies.filter((movie) =>{
    if (id!==movie.id){
        return true
    }
    return false
}) 

res.send('the movie is deleted')
})
//add a movie 
app.post('/movie', (req, res) => {
    const movie = req.body;
    console.log(movie);
    movies.push(movie);
    res.send('movie is added succesfully');

}

);
// set the server to listen at port
app.listen(port, () =>
    console.log(`the server is listening on port ${port}`)
);

