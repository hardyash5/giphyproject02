//const url = 'https://api.giphy.com/v1/gifs/search?api_key=ZRF4er4xY70H55uFr1dFjYtjfzzg6NkC&q=&limit=25&offset=0&rating=g&lang=en';
const = gifsearchword = 'unicorn';
const apikey = 'ZRF4er4xY70H55uFr1dFjYtjfzzg6NkC'; //My unique API key generated by Giphy
const path = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${gifsearchword}`;

fetch(path).then(function(res) { //Returns the data to the console
    return res.json() 
}).then(function(json) {
    console.log(json) 
}).catch(function(err) { //Catch errors and display in console
    console.log(err.message)
})

