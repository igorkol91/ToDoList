import './main.css';
import ToDo from './module/todo.js';
import Storage from './module/localStorage.js';
import updateDom from './module/dom.js';
import { success, error } from './module/utilities.js';
import dragAndDrop from './module/dragAndDrop.js';

const input = document.querySelector('#todo-entry');
const todoContainer = document.querySelector('ul');
let storage = [];

window.onload = () => {
  dragAndDrop(todoContainer);
  updateDom();
};

const CreateTodo = (description) => {
  const toDo = new ToDo(description);
  if (!Storage.isEmpty()) {
    storage = Storage.get();
    toDo.index = storage.length + 1;
    storage.push(toDo);
    Storage.set(storage);
  } else {
    Storage.set(storage);
  }
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // Validation to prevent too long inputs
    if ((input.value).length > 30 || (input.value).length < 3) {
      error();
      input.value = '';
      // Create new todo if input length is less that 20 characters
    } else {
      success();
      CreateTodo(input.value);
      input.value = '';
      updateDom();
    }
  }
});