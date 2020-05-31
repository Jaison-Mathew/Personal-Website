
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

const myElement = document.querySelector('h2')
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

var stuff = document.querySelector('ol');
console.dir('stuff');
stuff.classList.add('blue');
stuff.classList.toggle('blue');
stuff.classList.remove('blue');

var rvb = document.getElementsByTagName('test');
console.log(rvb[0]);
var bvr = rvb[0];
bvr.style.backgroundColor = "brown";
bvr.style.color = "white";
bvr.style.fontSize = "25px";


var pix = document.getElementsByTagName('a');
console.log(pix[0]);
var pix2 = document.getElementsByTagName('img');
console.log(pix2[1]);
var temp = pix[0].getAttribute('href');
pix[0].setAttribute('href', 'https://www.linkedin.com/uas/login?session_redirect=%2Ffeed');
var tempImg = pix2[0].getAttribute('src');
var tmpImg2 = pix2[1].getAttribute('src');
pix2[0].setAttribute('src', tmpImg2);
pix2[1].setAttribute('src', tempImg);
console.log(tempImg);

//interactive DOM elements
var light = document.querySelector('ol');
light.addEventListener('click', function(){
    console.log('click');
    light.style.color = "blue";
})

//selecting multiple elements
var myList = document.querySelectorAll('li');
for(var k = 0; k < myList.length; k++){
    myList[k].addEventListener('click', redify);
}

function redify(){
    console.log(this);
    var tmp = this.classList.toggle('red');
    console.log(tmp);
}

//creating keypress events
var wordUp = document.querySelector('input[name="mywords"]');
wordUp.addEventListener('keypress', function(events){
    if(events.keyCode === 13 && wordUp.value.length > 1){
        console.log(wordUp.value.length);
        starcol.style.backgroundColor = "brown";
    }
})
var starcol = document.querySelector('ol');


function stuff(){
    
    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        alert_data(obj.name, obj.family);
    }
    
    function alert_data(name, family){
        alert('Name : ' + name + ', Family : ' + family);
    }
 
    document.getElementById('file').addEventListener('change', onChange);        
}