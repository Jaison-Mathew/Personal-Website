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