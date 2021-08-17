export default class Storage {
  static set(storage) {
    localStorage.setItem('toDoList', JSON.stringify(storage));
  }

  static get() {
    return JSON.parse(localStorage.getItem('toDoList'));
  }

  static isEmpty() {
    return this.get() === null;
  }
}