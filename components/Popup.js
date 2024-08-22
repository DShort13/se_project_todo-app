class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
  }

  // _handleEscapeClose() {}

  // setEventListeners() {
  //   this._popupElement.addEventListener("click", () => {
  //     closeModal(this._popupElement);
  //   });
  // }
}

export default Popup;
