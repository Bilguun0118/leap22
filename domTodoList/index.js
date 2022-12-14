let dateChange = document.getElementById("date");
let numberOfToDos = document.getElementById("number-of-to-dos");
let input = document.getElementById("to-do-input");

let addButton = document.getElementById("add");
let editButton = document.querySelectorAll("edit");
let doneButton = document.querySelectorAll("done");
let deleteButton = document.querySelectorAll("delete");

let taskList = document.getElementById("tasks");
var numArr = [];

//set date
let today = new Date();
let date =
    " " +
    today.getFullYear() +
    "-" +
    parseInt(today.getMonth() + 1) +
    "-" +
    today.getDate();

dateChange.append(date);

//add elements on submit

addButton.addEventListener("click", newTaskSubmitted);
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});

function newTaskSubmitted() {
    let newTask = input.value;
    if (!newTask) {
        alert("Таскаа оруулна уу!");
    }
    // container for new task
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    //actual new task
    let task = document.createElement("input");
    task.type = "text";
    task.classList.add("text");
    task.value = newTask;
    task.setAttribute("readonly", "true");

    //move task into its container
    taskContainer.appendChild(task);

    //container for buttons
    let actionsContainer = document.createElement("div");
    actionsContainer.className = "actions";

    //edit button
    let editButton = document.createElement("button");
    editButton.className = "edit";
    let editIcon = document.createElement("i");
    editIcon.className = "fas fa-pen";
    //place icon inside button
    editButton.appendChild(editIcon);

    //done button
    let doneButton = document.createElement("button");
    doneButton.className = "done";
    let doneIcon = document.createElement("i");
    doneIcon.className = "fas fa-check";
    //place icon inside button
    doneButton.appendChild(doneIcon);

    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash";
    //place icon inside button
    deleteButton.appendChild(deleteIcon);

    //move buttons into container
    actionsContainer.append(editButton, doneButton, deleteButton);
    //move buttons container into task container
    taskContainer.appendChild(actionsContainer);

    //put task container into already existing task list div
    taskList.appendChild(taskContainer);

    //remove text in input field
    input.value = "";

    //keep trach of task numbers
    numArr.push(1);

    function counter() {
        if (numArr.length <= 1) {
            numberOfToDos.innerHTML = numArr.length + " task үлдлээ!";
        } else numberOfToDos.innerHTML = numArr.length + " tasks үлдээ!";
    }

    counter();

    // delete function
    deleteButton.addEventListener("click", deleteTask);

    function deleteTask() {
        taskList.removeChild(taskContainer);
        numArr.pop();
        counter();
    }

    //edit function
    editButton.addEventListener("click", editTask);

    function editTask() {
        if (editIcon.className == "fas fa-pen") {
            task.removeAttribute("readonly");
            task.focus();
            editIcon.className = "fas fa-save";
        } else {
            task.setAttribute("readonly", "readonly");
            editIcon.className = "fas fa-pen";
        }
    }

    //done function
    doneButton.addEventListener("click", crossTask);

    function crossTask() {
        task.classList.toggle("strikethrough");
    }
    return;
}