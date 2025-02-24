const taskInput = document.getElementById('task-input');
        const addButton = document.getElementById('add-button');
        const taskList = document.getElementById('task-list');addButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <span onclick="toggleComplete(this)">${taskText}</span>
                <button class="remove-button" onclick="removeTask(this)">Remove</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
            taskInput.focus();
        }
    }

    function toggleComplete(task) {
        task.classList.toggle('completed');
    }

    function removeTask(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    }