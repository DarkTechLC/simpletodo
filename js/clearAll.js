import countPendentsTasks from './countPendentsTasks.js';

const btnClearAll = document.querySelector('#btn-clear-all');
const taskList = document.querySelector('#list');

function clearAllTasks() {
  taskList.innerHTML = '';

  const content = JSON.stringify([]);
  localStorage.setItem('ToDo', content);

  countPendentsTasks();
}

export default function clear() {
  btnClearAll.addEventListener('click', clearAllTasks);
}