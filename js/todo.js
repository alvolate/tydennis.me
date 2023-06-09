const toDoForm= document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList= document.querySelector("#todo-list");
const stringToDo = localStorage.getItem("todos");
let toDos = [];
const TODOS_KEY = "todos";


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = (event.target.parentElement);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(object){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = object.id;
    span.innerText = object.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
function handleToDoSubmit(event){

    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text: newToDo,
        id:Date.now(),
    }
    toDos.push(newToDoObj); 
    paintToDo(newToDoObj);
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos=parsedToDos;
    parsedToDos.forEach(paintToDo);
}
toDoForm.addEventListener("submit",handleToDoSubmit);