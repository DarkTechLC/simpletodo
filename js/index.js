import countPendentsTasks from './countPendentsTasks.js';
import setTime from './setTime.js';
import renderTasks from './renderTasks.js';
import clearAll from './clearAll.js';
import add from './addTask.js';

const tasksElements = document.querySelectorAll('.task');

countPendentsTasks();
setTime();
renderTasks();
clearAll();
add();