import countPendentsTasks from './countPendentsTasks.js';

const btnClearAll = document.querySelector('#btn-clear-all');
const taskList = document.querySelector('#list');

export default function clear() {
  function clearAllTasks() {
    taskList.innerHTML = '';
    localStorage.setItem('ToDo', []);
    countPendentsTasks();
  }

  btnClearAll.addEventListener('click', clearAllTasks);
}