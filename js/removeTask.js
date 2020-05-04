import getTasks from './loadTasks.js';
import countPendentsTasks from './countPendentsTasks.js';

function removeTaskFromStorage(id) {
  let tasks = getTasks();
  let taskToRemove = tasks.filter(task => task.id === id)[0];
  let indexTaskToRemove = tasks.indexOf(taskToRemove);

  tasks.splice(indexTaskToRemove, 1);
  localStorage.setItem('ToDo', JSON.stringify(tasks));

  countPendentsTasks();
}

export default function removeTask() {
  let delBtnElements = document.querySelectorAll('.btn-del');
  
  delBtnElements.forEach(delBtnElement => {
    delBtnElement.addEventListener('click', () => {
      let id = delBtnElement.parentNode.getAttribute('data-id');
      delBtnElement.parentNode.remove();
      removeTaskFromStorage(id);
    });
  });
}