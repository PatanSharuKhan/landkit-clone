const todoItems=document.getElementById("todoItems");

let todos=["learn HTML","learn CSS","learn JS","learn Ruby"]

function createAndAppend(todo,id){
    const todoItem=document.createElement("div");
    const todoItemClasses="col-12 col-md-6 m-auto d-flex justify-content-between border border-info p-2 rounded mb-2"
    todoItem.classList.add(...todoItemClasses.split(" "));

    const itemDescription=document.createElement("p");
    const itemDescriptionClasses="lead mb-0";
    itemDescription.classList.add(...itemDescriptionClasses.split(" "));
    itemDescription.textContent=todo;


    const itemDeleteButton=document.createElement("button");
    const itemDeleteButtonClasses="badge bg-danger border-0";
    itemDeleteButton.classList.add(...itemDeleteButtonClasses.split(" "));
    itemDeleteButton.textContent="Delete";
    itemDeleteButton.addEventListener("click",()=>{
        todoItems.textContent=""
        todos=todos.filter(each=>each!==todo);
        displayTodos()
    });
    
    todoItem.appendChild(itemDescription)
    todoItem.appendChild(itemDeleteButton);

    todoItems.appendChild(todoItem);
}



function displayTodos(){
    for(let id in todos){
        createAndAppend(todos[id],id);
    }
}

displayTodos()