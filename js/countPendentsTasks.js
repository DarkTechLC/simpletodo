import getTasks from './loadTasks.js';

const pendentsTasksCounter = document.querySelector('#pendents-task-counter');

export default function countPendentsTasks() {
  let tasks = getTasks();

  let pendentsTasks = tasks.filter(task => task.done === false);

  pendentsTasksCounter.innerHTML = pendentsTasks.length;
}