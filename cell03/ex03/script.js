// script.js
document.addEventListener("DOMContentLoaded", function () {
    const ftList = document.getElementById("ft_list");
    const newTaskButton = document.getElementById("newTaskButton");

    // Load tasks from cookies
    const tasks = loadTasksFromCookies();
    displayTasks();

    newTaskButton.addEventListener("click", function () {
        const taskText = prompt("Enter a new task:");
        if (taskText !== null && taskText.trim() !== "") {
            const task = createTask(taskText);
            tasks.unshift(task); // Add task to the beginning of the list
            saveTasksToCookies();
            displayTasks();
        }
    });

    ftList.addEventListener("click", function (event) {
        if (event.target.classList.contains("task")) {
            const confirmDelete = confirm("Do you want to remove this task?");
            if (confirmDelete) {
                const index = Array.from(ftList.children).indexOf(event.target);
                tasks.splice(index, 1); // Remove task from the array
                saveTasksToCookies();
                displayTasks();
            }
        }
    });

    function createTask(text) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.textContent = text;
        return task;
    }

    function displayTasks() {
        ftList.innerHTML = ""; // Clear the list
        tasks.forEach(function (taskText) {
            const task = createTask(taskText);
            ftList.appendChild(task);
        });
    }

    function loadTasksFromCookies() {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [name, value] = cookie.split("=");
            if (name === "tasks") {
                return JSON.parse(value);
            }
        }
        return [];
    }

    function saveTasksToCookies() {
        document.cookie = `tasks=${JSON.stringify(tasks)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
});
