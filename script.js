//Selector
const todoinput = document.querySelector('.todo_list_input');
const todobutton = document.querySelector('.todo_input_button');
const todolist = document.querySelector('.todo_list');



//Event Listner
todobutton.addEventListener('click', addTodo);




//Function
function addTodo(event) {
    event.preventDefault();
    console.log('hi');

};

