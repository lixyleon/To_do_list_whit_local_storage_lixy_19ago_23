// Initial References
const newTaskInput = document.querySelector("#new-task input");
const taskDiv = document.querySelector("#task");
let deleteTask, editTask, tasks;
let updateNote = "";
let count;

// Function on window load

window.onload = () => {
    updateNote = "";
    count = Object.keys(localStorage).length;
    displayTask();
}

// Function to Display the Tasks

const displayTask = () => {
    if (Object.jeys(localStorage).length > 0) {
        taskDiv.style.display = "inline-block";
    } else {
        taskDiv.style.display = "none";
    }
    // Clear de Task

    taskDiv.innerHTML = "";

    // Fetch all the keys local storage

    let tasks = Object.keys(localStorege);
    tasks = tasks.sort();

    for (let key of tasks) {
        let classValue = "";

        // GET all values
        let value = localStorage.getItem(key);
        let taskInnerDiv = document.createElement("div");
        taskInnerDiv.classList.add("task");
        taskInnerDiv.setAtrribute("id",key);
        taskInnerDiv.innerHTML = `<span id="taskname">${key.split("_")}</span>`;

        // local storage would store boolean as string so we parse it to boolean back 
        let editButton = document. createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;
        if(!JSON.parse(value)){
            editButton.style.visibility = "visible";
        }else{
            editButton.style.visibility = "hidden";
            taskInnerDiv.classList.add("completed");
        }
        taskInnerDiv.appendChild(editButton)
        taskInnerDiv.innerHTML += `<button class= "delete"><ion-icon name="trash-outline"></ion-icon></button>`;
        taskDiv.appendChild(taskInnerDiv);
    }
}


