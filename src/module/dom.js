import Storage from './localStorage.js';

const toDoContainer = document.querySelector('ul');

const updateDom = () => {
  // reset container
  toDoContainer.innerHTML = '';
  let index = 0;
  if (Storage.isEmpty()) {
    Storage.set([]);
  }
  // Get Todo's from local storage
  const storage = Storage.get();
  storage.forEach((elem) => {
    // Reset the indexes starting from 1
    index += 1;
    elem.index = index;
    // Create li, check box and description h5 for every Todo Object
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const description = document.createElement('h6');
    const dragableI = document.createElement('i');
    checkbox.type = 'checkbox';
    description.innerText = elem.description;
    // Add classes
    toDoContainer.classList = 'd-flex flex-column p-0';
    li.classList += 'list-unstyled d-flex bottom-border w-100 position-relative';
    checkbox.classList += 'my-3';
    description.classList += 'mx-3 margin-desc';
    dragableI.classList = 'drag-bg-img';
    // Append check box and descripton on li
    li.append(checkbox, description, dragableI);
    // Append li on the ul
    toDoContainer.appendChild(li);
  });
};

export { updateDom };