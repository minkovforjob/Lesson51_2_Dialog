// Создание диалогового окна.
//  Создать кнопку для открытия модального диалогового окна
// (окно открывается на весь экран). 
// В этом окне будет форма с 4мя инпутами (имя фамилия емейл и пароль),
// заполнив форму пользователь нажимает на кнопку зарегистрироваться, 
// затем открывается новое вложенное модальное окно подтверждения, 
// в котором расположена кнопка  подтвердить. 
// Модальные окна должны закрываться по клавише esc

const openDialogBtn = document.querySelector(".openDialogBtn");
const winDialog = document.querySelector(".winDialog");
// const modalBody = document.querySelector(".modalBody");


openModalBtn.addEventListener("click", () => {
    modal.classList.remove("modalHidden");
})