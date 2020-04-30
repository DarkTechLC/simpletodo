import countPendentsTasks from './countPendentsTasks.js';

const btnClearAll = document.querySelector('#btn-clear-all');
const taskList = document.querySelector('#list');

function clearAllTasks() {
  taskList.innerHTML = '';

  // localStorage.clear();

  const content = JSON.stringify([]);
  
  localStorage.setItem('ToDo', content);

  countPendentsTasks();
  // localStorage.removeItem('ToDo');
}

export default function clear() {
  btnClearAll.addEventListener('click', clearAllTasks);
}