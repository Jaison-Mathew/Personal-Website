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