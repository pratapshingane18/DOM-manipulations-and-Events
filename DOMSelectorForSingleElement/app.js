// JQuery is never Suggested for DOM manipulation::
// Vanila Javascript is best for DOM manipulation

/* Single ELement Selector- Only Select First out of the COllection */

//document.getElementById(); // Select Element with its ID

console.log(document.getElementById('task-title'));

// Get things from the element:
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').class);

// Change Styling
// document.getElementById('task-title').style.background='#787';
// document.getElementById('task-title').style.color='#923';

// document.getElementById('task-title').style.color.padding='5px';
// // document.getElementById('task-title').style.display='none';

// // Change the Content
// document.getElementById('task-title').innerText = 'My Task';

// // Inner Html is used - when we wanna fetch something through the fetch api or ajax and then you wanted to insert a chunk of html;
// document.getElementById('task-title').innerHTML = '<span style="color:red">Task List<span> ';

// Or to avoid writting document.getElementById('task-title) Repeatedly make variable for it

const TaskTitle = document.getElementById('task-title');

TaskTitle.style.background='#787';
TaskTitle.style.color='#923';

TaskTitle.style.color.padding='5px';
// document.getElementById('task-title').style.display='none';

// Change the Content
TaskTitle.innerText = 'My Task';

// Inner Html is used - when we wanna fetch something through the fetch api or ajax and then you wanted to insert a chunk of html;
TaskTitle.innerHTML = '<span style="color:red">Task List<span> ';



document.getElementById('task-title').style.background='#787';
document.getElementById('task-title').style.color='#923';

document.getElementById('task-title').style.color.padding='5px';
// document.getElementById('task-title').style.display='none';

// Change the Content
document.getElementById('task-title').innerText = 'My Task';

// Inner Html is used - when we wanna fetch something through the fetch api or ajax and then you wanted to insert a chunk of html;
document.getElementById('task-title').innerHTML = '<span style="color:red">Task List<span> ';



// Newer and Much More powerful

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red'; // It will only style first li out of all the li as it is only  single query selector

document.querySelector('ul li').style.color='blue';
document.querySelector('li:last-child').style.color='orange';
document.querySelector('li:nth-child(3').style.color='yellow';

document.querySelector('li:nth-child(4)').textContent = "Hello Tasks";

document.querySelector('li:nth-child(odd').style.color='green'; // It will only change first Odd the reason being it is only a single query selector
// Same in case of even
















// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




