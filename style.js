const inputField = document.querySelector('input');
const submitButton = document.querySelector('button');
const taskList = document.querySelector('ul');

function addTask(task) {
    if (task.trim() === "") return;
    const li = document.createElement('li');
    li.textContent = task;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    inputField.value = '';
}

submitButton.addEventListener('click', () => {
    const task = inputField.value;
    addTask(task);
});

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const task = inputField.value;
        addTask(task);
    }
});
