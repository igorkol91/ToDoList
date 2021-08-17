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

const createLiTodo = (todoDescription, index) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const description = document.createElement('h6');
  const dragableI = document.createElement('i');
  checkbox.type = 'checkbox';
  description.innerText = todoDescription;
  // Add classes and attributes
  li.setAttribute('data-id', index);
  li.classList += 'list-unstyled d-flex bottom-border w-50 position-relative';
  checkbox.classList += 'my-3';
  description.classList += 'mx-3 my-auto';
  dragableI.classList = 'drag-bg-img my-auto';
  // Append check box and descripton on li
  li.append(checkbox, description, dragableI);
  return li;
};

export { success, error, createLiTodo };