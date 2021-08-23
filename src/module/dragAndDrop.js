import Storage from './localStorage.js';

const todoContainer = document.querySelector('ul');
let targetedElement;

const dragAndDrop = () => {
  todoContainer.childNodes.forEach((element) => {
    // Add class to track the current dragging element
    element.addEventListener('dragstart', () => {
      element.classList.add('dragging');
    });
    // Add drag over listener for swapping
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      targetedElement = element;
    });
    // Remove the class and stop tracking when element is dropped
    element.addEventListener('dragend', () => {
      element.classList.remove('dragging');
      // Logic for swaping values
      if (element !== targetedElement) {
        // Swap the indexes in local storage
        const localStorage = Storage.get();
        const elementA = element.getAttribute('data-id');
        const elementB = targetedElement.getAttribute('data-id');
        // Swap the text values in the h6 element (childNodes[1])
        const { innerText } = element.childNodes[1];
        element.childNodes[1].innerText = targetedElement.childNodes[1].innerText;
        targetedElement.childNodes[1].innerText = innerText;
        // Swap the checkbox values
        const { checked } = element.childNodes[0];
        element.childNodes[0].checked = targetedElement.childNodes[0].checked;
        targetedElement.childNodes[0].checked = checked;
        // Swap classes beween nodes
        const classList = element.childNodes[1].classList.value;
        element.childNodes[1].classList.value = targetedElement.childNodes[1].classList.value;
        targetedElement.childNodes[1].classList.value = classList;
        // Swap all the attributes in local storage
        const helpElem = localStorage[elementA];
        localStorage[elementA] = localStorage[elementB];
        localStorage[elementB] = helpElem;
        Storage.set(localStorage);
      }
    });
  });
};

export default dragAndDrop;