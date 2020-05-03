import getTasks from './loadTasks.js';
import countPendentsTasks from './countPendentsTasks.js';

function removeTaskFromStorage(id) {
  let tasks = getTasks();
  let taskToRemove = tasks.filter(task => task.id === id)[0];
  let indexTaskToRemove = tasks.indexOf(taskToRemove);

  // console.log(id, indexTaskToRemove, taskToRemove);
  // tasks.map(i => console.log(i));
  tasks.splice(taskToRemove, 1);
  // tasks.map(i => console.log(i));

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
  })
  
  // let taskElements = document.querySelectorAll('.tasks');
  // taskElements.forEach(taskElement => {
  //   taskElement.children[2].addEventListener('click', function() {
  //     taskElement.remove();
  //     removeTask();
  //   });
  // });
}