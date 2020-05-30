import getTasks from './loadTasks.js';
import markAsDone from './markAsDone.js';
import removeTask from './removeTask.js';

const taskList = document.querySelector('#list');

export default function renderTasks() {
  const tasks = getTasks();

  tasks.map(task => {
    const [checked, icon] = task.done ? ['checked', 'fa-check-circle'] : ['', 'fa-circle'];

    taskList.innerHTML += `
      <li class="task ${checked}" data-id="${task.id}">
        <button class="btn-task btn-check"><i class="fas ${icon}"></i></button>
        <span class="text">${task.task}</span>
        <button class="btn-task btn-del"><i class="fas fa-trash-alt"></i></button>
      </li>`;
  });

  markAsDone(); // Run this function for add mark task function in all tasks
  removeTask(); // Run this function for add remove function in all tasks
}