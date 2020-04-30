import getTasks from './loadTasks.js';
import countPendentsTasks from './countPendentsTasks.js';

const insertToDo = document.querySelector('#insert-todo');
const btnAddToDo = document.querySelector('#btn-add');
const taskList = document.querySelector('#list');

function addTask() {
  let tasks = getTasks();
  let task = insertToDo.value;

  if (!task) return;

  taskList.innerHTML += `
    <li class="task">
      <button class="btn-task btn-check"><i class="fas fa-circle"></i></button>
      <span class="text">${task}</span>
      <button class="btn-task btn-del"><i class="fas fa-trash-alt"></i></button>
    </li>`;
    
  let newTask = {
    task,
    done: false
  };
  
  tasks.push(newTask);
  
  localStorage.setItem('ToDo', JSON.stringify(tasks));
  
  countPendentsTasks();

  insertToDo.value = '';
}

export default function add() {
  btnAddToDo.addEventListener('click', addTask);

  document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
}