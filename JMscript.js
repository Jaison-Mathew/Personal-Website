//function that creates endless loop of images.
var y=0;
var pics = [];
pics[0] = "mypic.jpg";
pics[1] = "dance.jpg";
pics[2] = "samplepic.png";
pics[3] = "sample2.jpg";
function endlessImage(){ 
    var noEnd = document.getElementById("noEnd");
    noEnd.src = pics[y];
    y++;
    
    if(y >= pics.length){
        y=0;
    }
    setTimeout("endlessImage()", 3000);
}

//jquery function slides additional info when clicked
$(document).ready(function() {
    $("#b3").click(function(){
        $("ol").slideToggle(1000,function(){
            console.log("Slide was toggled");            
        });
    })
});


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
            "name": "Mario Kart",
            "year": 1996,
            "developer": "Nintendo",
            "platform": "N64"
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