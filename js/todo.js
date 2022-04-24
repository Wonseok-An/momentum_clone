const todoZone = document.querySelector(".main-page__todo");
const todoList = todoZone.querySelector("ul");
const todoForm = todoZone.querySelector("form");
const todoInput = todoForm.querySelector("input");
const todoButton = document.querySelector("#todo-button");

const TODOS_KEY = "toDos"

let toDos = [];

function documentClickControl(event) {
    if (event.target === todoButton) {
        todoZone.classList.remove(HIDDEN_CLASSNAME);
    } else if (!todoZone.contains(event.target)) {
        todoZone.classList.add(HIDDEN_CLASSNAME);
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    event.stopPropagation();
    const li = event.currentTarget.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== li.id);
    saveToDos();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);

    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: String(Date.now())
    }
    toDos.push(newToDoObj);

    paintToDo(newToDoObj);
    saveToDos();
}

document.addEventListener("click", documentClickControl);
todoForm.addEventListener("submit", handleToDoSubmit);

const savedToODs = localStorage.getItem(TODOS_KEY);
if (savedToODs) {
    const parsedToDos = JSON.parse(savedToODs);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
