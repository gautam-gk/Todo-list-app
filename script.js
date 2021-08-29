//Selector
const todoinput = document.querySelector('.todo_list_input'); //<!-- form button class 2 -->
const todobutton = document.querySelector('.todo_input_button'); //<!-- form button class 2 -->
const todolist = document.querySelector('.todo_list'); // <!--div container 1 ul class 2 -->



//Event Listner
todobutton.addEventListener('click', addTodo); //while the button is click the function will call
todolist.addEventListener('click', deleteCheck);




//Function
function addTodo(event) {
    if (todoinput.value === "") {
        alert("Please Enter something 👿");
        event.preventDefault();
    } else {
        event.preventDefault(); //prevent from from  submiting

        //todo DIV
        //document.createElement is mainly used for creating something new using script 
        const todoDiv = document.createElement("div") // we create a new div
        todoDiv.classList.add("todo") //adding the div class
        const new_todo = document.createElement("li"); //we created a new list
        new_todo.classList.add('todo_item'); //we added this list to a class
        new_todo.innerText = todoinput.value; //To add a text file through js we use innerText
        todoDiv.appendChild(new_todo); //Through this we can add this list to the div



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
        todo.remove();
    } else if (item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed_effect");
    }


};