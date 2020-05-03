export default function getTasks() {
  let load;

  if (!localStorage.getItem('ToDo')) {
    localStorage.setItem('ToDo', JSON.stringify([]));
    load = localStorage.getItem('ToDo');
  } else {
    load = localStorage.getItem('ToDo');
  }
  
  let tasks = JSON.parse(load);

  return tasks;
}