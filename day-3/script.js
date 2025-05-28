// step 1: Create an array to store tasks
let tasks = [
    {id: 1, name: 'Learn JavaScript'},
    {id: 2, name: 'Practice DOM'}

];

// Step 2: select DOM elements
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

// step 3: Function to render tasks
function renderTask() {
    // clear existing tasks
    taskList.innerHTML ="";

    // loop through tasks array and add to DOM
     tasks.forEach(task => {
        const li = document.createElement("button");
        li.textContent = task.name;

        // Add a remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeTask(task.id);


        li.appendChild(removeBtn);
        taskList.appendChild(li);
   });
}

// step 4: Function to add a task
function addTask() {
    console.log("Add Task button clicked!");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        const newTask = {
            id: Date.now(), //unique ID
            name: taskName 

        };    
        tasks.push(newTask);
        taskInput.value = "";
        renderTask();

    }
}

// step 5: Function to remove a task
function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTask();
}

// initial render
renderTask();
