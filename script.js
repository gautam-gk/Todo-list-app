//Selector
const todoinput = document.querySelector('.todo_list_input'); //<!-- form button class 2 -->
const todobutton = document.querySelector('.todo_input_button'); //<!-- form button class 2 -->
const todolist = document.querySelector('.todo_list'); // <!--div container 1 ul class 2 -->
const filterOption = document.querySelector('.filter-todo');


//Event Listner
document.addEventListener('DOMContentLoaded', getTodos);
todobutton.addEventListener('click', addTodo); //while the button is click the function will call
todolist.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);




//Function
function addTodo(event) {
    if (todoinput.value === "") {
        alert("Please Enter something 👿");
        event.preventDefault();
    } else {
        event.preventDefault(); //prevent from from  submiting

        //todo DIV
        //document.createElement is mainly used for creating something new using script 
        const todoDiv = document.createElement("div"); // we create a new div
        todoDiv.classList.add("todo"); //adding the div class
        const new_todo = document.createElement("li"); //we created a new list
        new_todo.classList.add('todo_item'); //we added this list to a class
        new_todo.innerText = todoinput.value; //To add a text file through js we use innerText
        todoDiv.appendChild(new_todo); //Through this we can add this list to the div

        //Add TODO to Local Storage
        savelocalstorage(todoinput.value);

        //check Mark button
        const completeButton = document.createElement('button'); //creating a button using createElement func
        completeButton.innerHTML = '<i class="fas fa-check"></i>'; //To add an icon we use innerHtml
        completeButton.classList.add("completed-btn"); //adding a class to the button
        todoDiv.appendChild(completeButton); //Through this we can add this button to todoDiv (Div)


        //Trash Mark button
        const TrashButton = document.createElement('button');
        TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
        TrashButton.classList.add("trash-btn");

        todoDiv.appendChild(TrashButton); //Through this we can add this button to todoDiv (Div)

        //Through this we can add the complete todoDiv to div container 1 ul class 2 
        todolist.appendChild(todoDiv);



        //clear todo input value
        todoinput.value = "";

    }


};

function deleteCheck(e) {
    const item = e.target;
    console.log(e.target); //This will help to identify where we are clicking and the result will show in console

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodo(todo);
        todo.addEventListener('transitionend', function() { //This function work when the transition is stop
            todo.remove();
        })
    }

    if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.add('completed');
        todo.classList.toggle("completed_effect");
    }


};


function filterTodo(e) {
    const todo_option = todolist.childNodes; //access the all elment inside todolist
    todo_option.forEach(function(todo) {
        console.log(e.target.value);
        switch (e.target.value) {
            case 'All':
                todo.style.display = 'flex';
                break;
            case 'Completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'Uncompleted':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'none';
                } else {
                    todo.style.display = 'flex';
                }
                break;

        };

    });

};

function savelocalstorage(todo) {
    //check -- Do I already have thing in there
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); //if there is something present it will added to the array
    }
    todos.push(todo); //pushing todos to todo
    localStorage.setItem("todos", JSON.stringify(todos)); //sent it back to the local storage

};

function getTodos() {

    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); //if there is something present it will added to the array
    }
    todos.forEach(function(todo) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const new_todo = document.createElement("li"); //we created a new list
        new_todo.classList.add('todo_item'); //we added this list to a class
        new_todo.innerText = todo; //To add a text file through js we use innerText
        todoDiv.appendChild(new_todo); //Through this we can add this list to the div

        //check Mark button
        const completeButton = document.createElement('button');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.classList.add("completed-btn");
        todoDiv.appendChild(completeButton);


        //Trash Mark button
        const TrashButton = document.createElement('button');
        TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
        TrashButton.classList.add("trash-btn");
        todoDiv.appendChild(TrashButton);
        todolist.appendChild(todoDiv);


    })




};

function removeLocalTodo(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); //if there is something present it will added to the array
    }
    const todoindex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));

};
