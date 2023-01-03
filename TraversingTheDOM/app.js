let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val= list;
// get child Node of the ul
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[2].nodeType;

// 1 Element
// 2 Attributes (deprecated)
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype




//get Children ELement Nodes
// val = list.children; // only Elements no text
val = list.children[0].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'testing-link';
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

// Last Children
val = list.lastChild;
val = list.lastElementChild;


// Count Children
val = list.childElementCount;

// Get Parent Item
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// Get Siblings

val = listItem.nextSibling;
val = listItem.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling; // return NULL as we are only dealing with the first List Item so no Previous





console.log(val); 


























// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Conver HTML Collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index){
//     item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//   li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }


// console.log(items);
