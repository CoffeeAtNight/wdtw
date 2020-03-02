const addTaskBtn = document.getElementById('addTaskBtn');
const toDoList = document.querySelector('.todo-container');
const taskContainer = document.querySelector('.tasksContainer');
//Form variables
const formContainer = document.querySelector('.form-container');
const cancelBtn = document.getElementById('cancelBtn');
const acceptBtn = document.getElementById('acceptBtn');
const taskName = document.getElementById('taskName');
const taskDescription = document.getElementById('taskDescription');
const taskDate = document.getElementById('taskDate');
const taskTime = document.getElementById('taskTime');

//Handle Local storage inicialization
if (localStorage.getItem("pwToDo")) {
    let dataFromStorage = JSON.parse(localStorage.getItem("pwToDo"));
    let taskList = dataFromStorage.taskList;
    let maxId = dataFromStorage.maxId;
} else {
    let objectToSave = {
        maxId: 0,
        taskList: [],
    }
    localStorage.setItem("pwToDo", JSON.stringify(objectToSave));
}
//Get fresh data from local storage
const getFreshData = () => {
    let data = JSON.parse(localStorage.getItem("pwToDo"));
    console.log(data);
    return data;
}


// This function render new list of tasks every time when it need
const renderTasks = (taskList) => {
    console.log(taskList)
    taskList.forEach(item => {
        let li = document.createElement('li');
        li.classList.add('taskContainer');
        let span = document.createElement('span');
        // section info
        let div = document.createElement('div');
        div.classList.add('taskInfo');
        let title = document.createElement('p');
        title.innerText = item.name;
        let description = document.createElement('p');
        description.innerText = item.description;
        let time = document.createElement('p');
        time.innerText = item.date + " " + item.time

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(time);

        li.appendChild(span);
        li.appendChild(div);

        let button = document.createElement('button');
        button.innerText = "x";
        li.appendChild(button);

        taskContainer.appendChild(li);


    })
}

//Clear form fields 
let clearFormFields = () => {
    taskName.value = "";
    taskDescription.value = "";
}

//Set default date for dateInput and timeInput in form
let setDate = () => {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (month === 0) {
        month = 1;
    }
    if (month <= 9) {
        month = "0" + month;
    }
    if (day === 0) {
        day = 1;
    }
    if (day <= 9) {
        day = "0" + day;
    }
    taskDate.value = `${year}-${month}-${day}`;

    if (hours <= 9) {
        hours = "0" + hours;
    }
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    taskTime.value = `${hours}:${minutes}`;

}

// Function show and hide components
let showAndHide = (elementToHide, elementToShow) => {
    console.log("okej")
    elementToHide.classList.add('disabled');
    setTimeout(() => {
        elementToHide.style.display = "none";
    }, 300);
    elementToShow.style.display = "flex"
    elementToShow.classList.remove('disabled');
}

//Handle open form operation
addTaskBtn.addEventListener('click', () => {
    setDate();
    showAndHide(toDoList, formContainer)
})

// Handle form exit operation - exit to tasks list
cancelBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFormFields();
    showAndHide(formContainer, toDoList);
})

//Handle add new task to list operation
acceptBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    let tasks = getFreshData();
    tasks.maxId += 1;
    let id = tasks.maxId;

    let name = taskName.value;
    let description = taskDescription.value;
    let date = taskDate.value;
    let time = taskTime.value;

    let freshTask = {
        id,
        name,
        description,
        date,
        time
    }

    tasks.taskList.push(freshTask);

    localStorage.setItem("pwToDo", JSON.stringify(tasks));
    clearFormFields();
    showAndHide(formContainer, toDoList);
    tasks = getFreshData();
    renderTasks(tasks.taskList)
})


