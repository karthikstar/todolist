// Selectors 
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

// Event listeners 
todoButton.addEventListener("click", addTodo)




// Functions 

function addTodo(event){
    // to prevent form from submitting/ refreshing.
    event.preventDefault();


    //CREATING A Todo DIV element consisting of a newTodo,a completed button, and a thrash button.
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); // we are inserting the newTodo into the todoDiv.

    // CHECK MARK BUTTON 
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check" ></li>';

    completedButton.classList.add('complete-btn');

    todoDiv.appendChild(completedButton);

    // CHECK THRASH BUTTON 
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class = "fas fa-trash" ></li>';

    trashButton.classList.add('trash-btn');

    todoDiv.appendChild(trashButton);
    
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    // CLEAR TODO INPUT VALUE 
    todoInput.value = "";
}

