import Storage from './localStorage.js';

// Function for displaying a todo was created
const success = () => {
  const success = document.createElement('div');
  success.innerText = 'To Do created successfully!';
  success.classList += 'bg-success success w-50 text-center';
  const body = document.querySelector('body');
  body.append(success);
  setTimeout(() => success.remove(), 3000);
};

const editSuccess = () => {
  const success = document.createElement('div');
  success.innerText = 'To Do edited successfully!';
  success.classList += 'bg-success success w-50 text-center';
  const body = document.querySelector('body');
  body.append(success);
  setTimeout(() => success.remove(), 3000);
};

// Function to display a todo was not created
const error = () => {
  const error = document.createElement('div');
  error.innerText = 'To Do should be 3-30 characters!';
  error.classList += 'bg-danger error w-50 text-center';
  const body = document.querySelector('body');
  body.append(error);
  setTimeout(() => error.remove(), 3000);
};

// Adding line through if the todo is checked as completed and updating local storage
const checkLi = (e, index) => {
  const todoArray = Storage.get();
  if (e.target.checked) {
    todoArray[index].checked = true;
    e.target.parentNode.childNodes[1].classList = 'mx-3 my-auto line-through';
  } else {
    todoArray[index].checked = false;
    e.target.parentNode.childNodes[1].classList = 'mx-3 my-auto';
  }
  Storage.set(todoArray);
};

// Individual remove button added on every todo li
const deleteBtn = (e, index) => {
  e.target.parentNode.remove();
  let storage = Storage.get();
  storage = storage.filter((elem) => elem.index !== index);
  Storage.set(storage);
};

const editButton = (e) => {
  const descriptionText = e.target.parentNode.childNodes[1];
  const index = e.target.parentNode.getAttribute('data-id');
  const descriptionInput = document.createElement('input');
  descriptionInput.classList = 'editInput';
  e.target.parentNode.append(descriptionInput);
  descriptionInput.value = descriptionText.innerText;
  // Add event listener for pressing enter and changing the todo
  descriptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if ((descriptionInput.value).length > 30 || (descriptionInput.value).length < 3) {
        descriptionInput.remove();
        error();
      } else {
        descriptionText.innerText = descriptionInput.value;
        descriptionInput.remove();
        editSuccess();
        const storage = Storage.get();
        storage[index].description = descriptionText.innerText;
        Storage.set(storage);
      }
    }
  });
  // Add event listener to stop the editing
  descriptionInput.addEventListener('keypress', (e) => {
    if (e.key === '`') {
      e.target.remove();
    }
  });
};

const createLiTodo = (todoDescription, index) => {
  // Create all the elements needed for a todo
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const description = document.createElement('h6');
  const editBtn = document.createElement('button');
  const deleteOneBtn = document.createElement('button');
  checkbox.type = 'checkbox';
  description.innerText = todoDescription;
  // Add event listener to the checkbox
  checkbox.addEventListener('change', (e) => {
    checkLi(e, index);
  });
  // Add classes, attributes and event listeners
  li.setAttribute('data-id', index);
  li.setAttribute('draggable', 'true');
  li.classList += 'list-unstyled d-flex bottom-border w-50 position-relative dragable';
  checkbox.classList += 'my-3';
  deleteOneBtn.innerText = 'X';
  deleteOneBtn.classList = 'drag-bg my-auto';
  deleteOneBtn.addEventListener('click', (e) => {
    deleteBtn(e, index);
  });
  editBtn.classList = 'my-auto edit';
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', (e) => {
    editButton(e);
  });
  // Check if the checkbox is checked
  const storage = Storage.get();
  if (storage[index].checked) {
    description.classList += 'mx-3 my-auto line-through';
    checkbox.checked = true;
  } else {
    description.classList += 'mx-3 my-auto';
  }
  // Append check box, descripton and buttons on li
  li.append(checkbox, description, editBtn, deleteOneBtn);
  return li;
};

export { success, error, createLiTodo };