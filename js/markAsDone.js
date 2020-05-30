import getTasks from './loadTasks.js';
import countPendentsTasks from './countPendentsTasks.js';

function markTaskAsDoneInStorage(id) {
  let tasks = getTasks();
  let taskToMark = tasks.find(task => task.id === id);
  let indexTaskToMark = tasks.indexOf(taskToMark);

  tasks[indexTaskToMark].done = tasks[indexTaskToMark].done ? false : true;
  localStorage.setItem('ToDo', JSON.stringify(tasks));

  countPendentsTasks();
}

export default function markAsDone() {
  let checkBtnElements = document.querySelectorAll('.btn-check');

  checkBtnElements.forEach(checkBtnElement => {
    checkBtnElement.addEventListener('click', () => {
      const id = checkBtnElement.parentNode.getAttribute('data-id');
      checkBtnElement.parentNode.classList.toggle('checked');
      checkBtnElement.firstChild.classList.toggle('fa-circle');
      checkBtnElement.firstChild.classList.toggle('fa-check-circle');

      markTaskAsDoneInStorage(id);
    });
  });
}