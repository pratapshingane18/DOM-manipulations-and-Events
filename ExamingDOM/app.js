let val;
val = document;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;

val = document.body;
val = document.doctype;

val = document.domain;
val = document.URL;

val = document.characterSet;

val =document.contentType;

// We can Select Stuff without using Selector:
// It is not recommended but it is possible

val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;


val = document.images; // No image for now

val = document.scripts;

val = document.scripts[2].getAttribute('src');


// script

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(scripts){
    console.log(scripts.getAttribute('src'));
});

console.log(val);