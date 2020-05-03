import getTasks from './loadTasks.js';
import generateId from './generateId.js';
import countPendentsTasks from './countPendentsTasks.js';
import removeTask from './removeTask.js';

const insertToDo = document.querySelector('#insert-todo');
const btnAddToDo = document.querySelector('#btn-add');
const taskList = document.querySelector('#list');

function addTask() {
  let tasks = getTasks();
  let task = insertToDo.value;

  if (!task) return;

  let id = generateId();

  taskList.innerHTML += `
    <li class="task" data-id="${id}">
      <button class="btn-task btn-check"><i class="fas fa-circle"></i></button>
      <span class="text">${task}</span>
      <button class="btn-task btn-del"><i class="fas fa-trash-alt"></i></button>
    </li>`;
    
  let newTask = {
    id,
    task,
    done: false,
  };
  
  tasks.push(newTask);
  localStorage.setItem('ToDo', JSON.stringify(tasks));
  
  countPendentsTasks();
  removeTask(); // Run this function for add remove function in all tasks

  insertToDo.value = '';
}

export default function add() {
  btnAddToDo.addEventListener('click', addTask);

  document.body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });
}