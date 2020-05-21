console.dir(document);
console.log('me');
var a = "\"Hanging\"";
var b = 0;
var c;
c = a + ' ' + b;
console.log(c);
console.log(typeof(b));

//if statement
function counter(x){
    b++;
    var posts = x + b;
    if(b >= 100){
        b = 0;
    }else{
        document.querySelector('section').innerHTML = posts;
    }
    console.log(x);
}

/*
//understanding functions
function multiply(p, q){
    return p*q;
}

//created objects
var car = {};
car.year = 1984;
car.type = 'pontiac';
car.name = 'firebird';
car.message = function(){
    return 'Its an old car.';
}

var game = {};
game.name = "Mario Kart 64";
game.year = 1996;
game.platform = "Nintendo 64";
game.introMessage = function(){
    return 'Welcome to Mario Kart.';
}

//created arrays
var favMovies = ["Back to the future", 1985, "Avengers Endgame", 2019]
favMovies[favMovies.length] = "Lord of the Rings"
favMovies[favMovies.length] = 2003
var soda = favMovies.pop();
console.log(favMovies);
var move = favMovies.unshift('2012');
console.log(favMovies);
var clean = favMovies.reverse();
console.log(favMovies);

//more if statements
var num = 12;
if(num == 12 && b == 0){
    console.log('both are equal');
}else if(num < 11){
    console.log('num is less than 11');
}else{
    console.log('num is greater than 12');
}

//created for loops
for(var i =0; i<= favMovies.length; i++){
    console.log(i);
}

for(var t in car){
    console.log(t + ': ' + car[t])
}

for(var play in game){
    console.log(play + ': ' + game[play])
}

//created string and displayed index functions
var myString = "I look forward to working with you."
var find = myString.indexOf('to');
console.log(find);
var look = myString.search('you')
console.log(look);
var letterIndex = myString.lastIndexOf('forward');
console.log(letterIndex);

/*const myElement = document.querySelector('h2')
function buttonPress(){
    let temp = document.getElementById("myInput");
    output(temp.value);
}

function output(mess){
    myElement.innerHTML = mess;
}

const myButton = document.querySelector('#buttonTest');
myButton.addEventListener('click', buttonPress);

const output = document.getElementById('output');
const testingButton = document.getElementById('testingButton');
testingButton.addEventListener('click', checkVal);
function checkVal(){
    let val = document.querySelector('input[name="myNum"]').value;
    console.log(val);
    output.innerHTML = numChecker(val);
}

function numChecker(num){
    console.log(num);
    if(num%2){
        message = "its odd";
    }else{
        message = "its even";
    }
    return message;
}
*/

console.log(document.URL);
var el = document.querySelector('h2');
console.dir(el.innerHTML);
el.innerHTML = 'hi everybody';
el.style.color = 'blue';
el.style.background = 'green';

var el2 = document.getElementsByTagName('li');
el2[0].style.background = 'yellow';
el2[2].style.color = 'green';
console.log(el2);

var ment = document.getElementById('buttonTest');
ment.style.background = 'orange';

var el5 = document.querySelector('p');
console.log(el5);
el5.textContent = "hello WORLD!";
el5.textContent;
el5.outerHTML = "happy <br> birthday.";
//document.querySelector('h2').innerHTML = car.name + '' + car.year;