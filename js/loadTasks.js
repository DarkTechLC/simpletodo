export default function getTasks() {
  if (!localStorage.getItem('ToDo'))
    localStorage.setItem('ToDo', JSON.stringify([]));
  return JSON.parse(localStorage.getItem('ToDo'));
}