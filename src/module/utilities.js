import Storage from './localStorage.js';

const success = () => {
  const success = document.createElement('div');
  success.innerText = 'To Do created successfully!';
  success.classList += 'bg-success success w-50 text-center';
  const body = document.querySelector('body');
  body.append(success);
  setTimeout(() => success.remove(), 3000);
};

const error = () => {
  const error = document.createElement('div');
  error.innerText = 'To Do should be 3-30 characters!';
  error.classList += 'bg-danger error w-50 text-center';
  const body = document.querySelector('body');
  body.append(error);
  setTimeout(() => error.remove(), 3000);
};

const checkLi = (e, index) => {
  const todoArray = Storage.get();
  if (e.target.checked) {
    todoArray[index].checked = true;
    e.target.parentNode.childNodes[1].classList += 'mx-3 my-auto line-through';
  } else {
    todoArray[index].checked = false;
    e.target.parentNode.childNodes[1].classList += 'mx-3 my-auto';
  }
  Storage.set(todoArray);
};

const deleteBtn = (e, index) => {
  e.target.parentNode.remove();
  let storage = Storage.get();
  storage = storage.filter((elem) => elem.index !== index);
  Storage.set(storage);
};

const createLiTodo = (todoDescription, index) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const description = document.createElement('h6');
  const deleteOneBtn = document.createElement('button');
  checkbox.type = 'checkbox';
  description.innerText = todoDescription;
  // Add event listener to the checkbox
  checkbox.addEventListener('change', (e) => {
    checkLi(e, index);
  });
  // Add classes and attributes
  li.setAttribute('data-id', index);
  li.classList += 'list-unstyled d-flex bottom-border w-50 position-relative';
  checkbox.classList += 'my-3';
  deleteOneBtn.innerText = 'X';
  deleteOneBtn.addEventListener('click', (e) => {
    deleteBtn(e, index);
  });
  // Check if the checkbox is checked
  const storage = Storage.get();
  if (storage[index].checked) {
    description.classList += 'mx-3 my-auto line-through';
    checkbox.checked = true;
  } else {
    description.classList += 'mx-3 my-auto';
  }
  deleteOneBtn.classList = 'drag-bg my-auto';
  // Append check box and descripton on li
  li.append(checkbox, description, deleteOneBtn);
  return li;
};

export { success, error, createLiTodo };