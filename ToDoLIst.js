const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-btn");
const taskList = document.getElementById("list");

let tasks = [];

function renderTasks() {
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		listItem.innerText = task.text;
		if (task.completed) {
			listItem.classList.add("completed");
		}
		listItem.addEventListener("click", () => {
			toggleTask(index);
		});
		taskList.appendChild(listItem);
	});
}

function addTask() {
	const newTaskText = newTaskInput.value.trim();
	if (newTaskText !== "") {
		const newTask = {
			text: newTaskText,
			completed: false
		};
		tasks.push(newTask);
		renderTasks();
		newTaskInput.value = "";
	}
}

function toggleTask(index) {
	tasks[index].completed = !tasks[index].completed;
	renderTasks();
}

addTaskButton.addEventListener("click", addTask);