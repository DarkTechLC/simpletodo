import getTasks from './loadTasks.js';
import countPendentsTasks from './countPendentsTasks.js';

function markTaskAsDoneInStorage(id) {
  let tasks = getTasks();
  let taskToMark = tasks.filter(task => task.id === id)[0];
  let indexTaskToMark = tasks.indexOf(taskToMark);

  tasks[indexTaskToMark].done = tasks[indexTaskToMark].done ? false : true;

  localStorage.setItem('ToDo', JSON.stringify(tasks));

  countPendentsTasks();
}

export default function markAsDone() {
  let checkBtnElements = document.querySelectorAll('.btn-check');
  
  checkBtnElements.forEach(checkBtnElement => {
    checkBtnElement.addEventListener('click', () => {
      let id = checkBtnElement.parentNode.getAttribute('data-id');
      checkBtnElement.parentNode.classList.toggle('checked');
      checkBtnElement.children[0].classList.toggle('fa-circle');
      checkBtnElement.children[0].classList.toggle('fa-check-circle');

      markTaskAsDoneInStorage(id);
    });
  });
}