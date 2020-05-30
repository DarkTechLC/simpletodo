import getTasks from './loadTasks.js';

const pendentsTasksCounter = document.querySelector('#pendents-task-counter');

export default function countPendentsTasks() {
  const tasks = getTasks();
  const pendentsTasks = tasks.filter(task => task.done === false);
  pendentsTasksCounter.textContent = pendentsTasks.length;
}