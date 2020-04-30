import getTasks from './loadTasks.js';

const taskList = document.querySelector('#list');

export default function renderTasks() {
  let tasks = getTasks();

  let content;

  tasks.map(task => {
    let [checked, icon] = task.done ? ['checked', 'fa-check-circle'] : ['', 'fa-circle'];

    content = `
      <li class="task ${checked}">
        <button class="btn-task btn-check"><i class="fas ${icon}"></i></button>
        <span class="text">${task.task}</span>
        <button class="btn-task btn-del"><i class="fas fa-trash-alt"></i></button>
      </li>`;

    taskList.innerHTML += content;
  })
}