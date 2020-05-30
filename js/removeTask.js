import getTasks from './loadTasks.js';
import countPendentsTasks from './countPendentsTasks.js';

function removeTaskFromStorage(id) {
  const tasks = getTasks();
  const taskToRemove = tasks.find(task => task.id === id);
  const indexTaskToRemove = tasks.indexOf(taskToRemove);

  tasks.splice(indexTaskToRemove, 1);
  localStorage.setItem('ToDo', JSON.stringify(tasks));
  countPendentsTasks();
}

export default function removeTask() {
  const delBtnElements = document.querySelectorAll('.btn-del');

  delBtnElements.forEach(delBtnElement => {
    delBtnElement.addEventListener('click', () => {
      const id = delBtnElement.parentNode.getAttribute('data-id');
      delBtnElement.parentNode.remove();
      removeTaskFromStorage(id);
    });
  });
}