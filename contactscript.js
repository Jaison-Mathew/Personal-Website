var a = "\"Hanging\"";
var b = 0;
var c;
c = a + ' ' + b;

//if statement that displays the number of times the reset button is clicked on.
function counter(x){
    b++;
    var posts = x + b;
    if(b >= 100){
        b = 0;      //Counter goes back to 0 when it reaches 100
    }else{
        document.querySelector('section').innerHTML = posts;
    }
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

//creating element for comment section
var selectInput = document.querySelector('input[name="newItem"]');
selectInput.addEventListener('keypress', function(event){
    if(event.keycode === 13){
        //console.log(event.keycode);
        makeNew();
    }
})

//Adds new item in array of string comments with 'x' once clicked
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
    }
    /*else{
        this.getElementById('span')[0].remove();
    }*/
}

//create new comment when entered
function makeNew(){
    var il = document.createElement('li');
    il.addEventListener('click', myList);
    var textVal = 'blank '+(allList.length +1);
    var tempNode = document.createTextNode(textVal);
    il.appendChild(tempNode);
    newList.appendChild(il);
}