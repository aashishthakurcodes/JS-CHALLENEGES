// Task array to store task objects
let tasks = [];

// DOM elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const submitBtn = document.getElementById('submit-btn');

// Add or edit a task
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.getElementById('task-id').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    if (id) {
        // Update task
        const task = tasks.find(task => task.id === id);
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;

        submitBtn.textContent = 'Add Task';
        document.getElementById('task-id').value = '';
    } else {
        // Add new task
        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            dueDate,
        };
        tasks.push(newTask);
    }

    taskForm.reset();
    displayTasks();
});

// Display all tasks
function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="task-details">
                <strong>${task.title}</strong>
                <p>${task.description}</p>
                <small>Due: ${task.dueDate}</small>
            </div>
            <div class="task-actions">
                <button class="edit-btn" onclick="editTask('${task.id}')">Edit</button>
                <button class="delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

// Edit a task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    document.getElementById('task-id').value = task.id;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;

    submitBtn.textContent = 'Update Task';
}

// Delete a task
function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        displayTasks();
    }
}
