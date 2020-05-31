
var a = "\"Hanging\"";
var b = 0;
var c;
c = a + ' ' + b;


//if statement
function counter(x){
    b++;
    var posts = x + b;
    if(b >= 100){
        b = 0;
    }else{
        document.querySelector('section').innerHTML = posts;
    }
}

//function that creates endless loop of images.
var y=0;
var pics = [];
pics[0] = "mypic.jpg";
pics[1] = "dance.jpg";
pics[2] = "samplepic.png";
pics[3] = "sample2.png";
function endlessImage(){ 
    var noEnd = document.getElementById("noEnd");
    noEnd.src = pics[y];
    y++;
    
    if(y >= pics.length){
        y=0;
    }
    setTimeout("endlessImage()", 3000);
}

//function that parses JSON file and fill in fields.

function onChange(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
}

function onReaderLoad(event){
    console.log(event.target.result);
    var obj = JSON.parse(event.target.result);
    contentDisplay(obj.fName, obj.lName, obj.email, obj.subject, obj.message, obj.url);   
}
document.getElementById('file').addEventListener('change', onChange);

//function that will use uploaded json file to fill in text fields
function contentDisplay(fName, lName, email, subject, message, url){
    document.getElementById('fName').value = fName;
    document.getElementById('lName').value = lName;
    document.getElementById('email').value = email;
    document.getElementById('subject').value = subject;
    document.getElementById('message').value = message;
    document.getElementById('url').value = url;
    console.log(fName, lName, email, subject, message, url);
}

//creating mouse events
var hoverList = document.querySelectorAll('li');
for(var p =0; p<hoverList.length; p++){
    //console.log(hoverList[p]);
    hoverList[p].addEventListener('mouseover', function(){
        this.classList.add('lightblue');
    });
    hoverList[p].addEventListener('mouseout', function(){
        this.classList.remove('lightblue');
    });
}

//creating element
var selectInput = document.querySelector('input[name="newItem"]');
selectInput.addEventListener('keypress', function(event){
    if(event.keycode === 13){
        //console.log(event.keycode);
        makeNew();
    }
})

var newList = document.querySelector('ol');
var clickit = document.getElementById('clickit');
var allList = document.querySelectorAll('li');
    
for(var x=0; x<allList.length; x++){
    allList[x].addEventListener('click', myList);
}
function myList(){
    var tog = this.classList.toggle('lightblue');
    if(tog){
        var span = document.createElement('span');
        span.textContent = 'x';
        span.addEventListener('click', function(){
            this.parentElement.remove;
        })
        this.appendChild(span);

    }else{
        this.getElementById('span')[0].remove();
    }
}

function makeNew(){
    var il = document.createElement('li');
    il.addEventListener('click', myList);
    var textVal = 'blank '+(allList.length +1);
    var tempNode = document.createTextNode(textVal);
    il.appendChild(tempNode);
    newList.appendChild(il);
}

//creating json object
var myObj = {
    "firstName": "John",
    "lastName": "Jones",
    "age": 34,
    "job": "Detective",
    "homeAddr": {
        "street address": "21 jump street",
        "city": "blue valley",
        "state": "New Jersey",     
        "zipcode": "12345"
    },
    "phoneNumber": [
        {
            "type": "home",
            "phoneNum": "123-456-7890"
        },
        {
            "type": "work",
            "phoneNum": "345-123-5432"
        },
        {
            "type": "mobile",
            "phoneNum": "876-398-0935"
        }
    ],
    "gender": "male"
};
//console.log(myObj);
var output1 = document.getElementById('output1');
//output1.innerHTML = 'My name is ' + myObj.firstName + ' ' + myObj.phoneNumber[1].phoneNum;

var favObj = {
    "games":[
        {
            "name": "Ratchet and Clank",
            "year": 2002,
            "developer": "Insomniac Games",
            "platform": "Playstation 2"
        },
        {
            "name": "Donkey Kong",
            "year": 1982,
            "developer": "Nintendo",
            "platform": "Arcade"
        }],
    "songs":[
        {
            "songName": "In the End",
            "artist": "Linkin Park",
            "album": "Hybrid Theory"
        },
        {
            "songName": "Absolutely",
            "artist": "Nine Days",
            "album": "The Madding Crowd"
        }]
}
//console.log(favObj);

//Adding object to array
var addSome = {
    "songName": "Back in the game",
    "artist": "Airbourne",
    "album": "Mad Dog"
}
favObj.songs.push(addSome);
/*
var output2 = document.getElementById('output2');
var myJamz = document.getElementById('myJamz');
for(var t=0; t<favObj.games.length; t++){
    var gameOn = favObj.games[t];
    //console.log(gameOn);
    output2.innerHTML += gameOn.name + " by " + gameOn.developer + "<br>";
}
for(var e=0; e<favObj.songs.length; e++){
    var music = favObj.songs[e];
    //console.log(music);
    myJamz.innerHTML += music.songName + " by " + music.artist + "<br>";
}*/

//testing stringify function and local storage
var showMe = document.getElementById('showMe');
var tmpString = JSON.stringify(addSome);
var tmpObj = localStorage.getItem('test');
//console.log(tmpObj);
var stringToObj = JSON.parse(tmpString);
//showMe.innerHTML = addSome.songName + ' is a great song.';

//testing fetching API
const showDisplay = document.getElementById('showDisplay');
const urlapi = "https://randomuser.me/api/?results=5";
/*
fetch(urlapi).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data.results[0]);
    let people = data.results[0].name;
    showDisplay.innerHTML = people.first + ' ' + people.last;
}).catch(function(err){
    console.log(err);
});

//using foreach function

fetch(urlapi).then(function(res){
    return res.json()
}).then(function(data){
data.results.forEach(function(person){
    console.log(person.name.first);
    console.log(person.picture.thumbnail);
    output.innerHTML += person.name.first + " ";
    output.innerHTML += "<img src='"+person.picture.thumbnail+"'><br>";
})
    console.log(data);
})*/
//document.querySelector('h2').innerHTML = car.name + '' + car.year;