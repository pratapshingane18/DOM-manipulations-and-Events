//We can construct DOM element from scratch in Vanilla Javascript// create a Element;

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add Attribute
li.setAttribute('title','New ListItem');

// Create Text Node and Append

li.appendChild(document.createTextNode('Hello World'));


// Create New Link element:
const link = document.createElement('a');

// add classs
link.className = 'delete-item secondary-content';

// add Html for Adding Icon
link.innerHTMl = '<i class="fa fa-remove"></i>';

// append Link into li
li.appendChild(link);

//Append li as child to ul
document.querySelector('ul.collection').appendChild(li);
val = li.children;
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
