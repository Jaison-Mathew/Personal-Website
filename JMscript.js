console.dir(document);
console.log('me');
var a = "\"Hanging\"";
var b = 0;
var c;
c = a + ' ' + b;
console.log(c);
console.log(typeof(b));

function counter(x){
    b++;
    var posts = x + b 
    document.querySelector('section').innerHTML = posts;
    console.log(x);
}

function multiply(p, q){
    return p*q;
}

var car = {};
car.year = 1984;
car.type = 'pontiac';
car.name = 'firebird';
car.message = function(){
    return 'Its an old car.';
}

var favMovies = ["Back to the future", 1985, "Avengers Endgame", 2019]
favMovies[favMovies.length] = "Lord of the Rings"
favMovies[favMovies.length] = 2003

//document.querySelector('h2').innerHTML = car.name + '' + car.year;