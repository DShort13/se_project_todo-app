import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    // this._handleFormSubmit = handleFormSubmit;
  }

  // _getInputValues() {}

  // setEventListeners() {
  //   this._popupElement.addEventListener("submit", (evt) => {
  //     evt.preventDefault();
  //     const name = evt.target.name.value;
  //     const dateInput = evt.target.date.value;

  //     // Create a date object and adjust for timezone
  //     const date = new Date(dateInput);
  //     date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  //     const id = uuidv4();
  //     const values = { name, date, id };
  //     const todo = generateTodo(values);
  //     section.addItem(todo);
  //     closeModal();
  //     newTodoValidator.resetValidation();
  //   });
  // }
}

export default PopupWithForm;
