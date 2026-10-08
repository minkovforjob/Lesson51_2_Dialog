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
const winDialogBody = document.querySelector(".winDialogBody");
const btnOkDialog = document.querySelector(".btnOkDialog");
const btnCloseDialog = document.querySelector(".btnCloseDialog");
const littleModal = document.querySelector(".littleModal");
const littleModalBody = document.querySelector(".littleModalBody");
const btnCloselittleModal = document.querySelector(".btnCloselittleModal");
const btnOklittleModal = document.querySelector(".btnOklittleModal");

openDialogBtn.addEventListener("click", () => {
    winDialog.classList.remove("dialogHidden");
})

winDialog.addEventListener("click", () => {
    winDialog.classList.add("dialogHidden");
});

winDialogBody.addEventListener("click", (event) => {
    event.stopPropagation();
})


btnCloseDialog.addEventListener("click", () => {
    winDialog.classList.add("dialogHidden");
});


document.addEventListener("keydown", (event) => {
    if ((event.key === "Escape") && (!littleModal.classList.contains("modalHidden"))) {
        littleModal.classList.add("modalHidden");
    }
    else { winDialog.classList.add("dialogHidden") }

});

// btnOkDialog.addEventListener("click", () => {
//     // winDialog.classList.add("dialogHidden");
//     littleModal.classList.remove("modalHidden");
//     console.log("littleModal.classList.remove(modalHidden)");
// });

btnOkDialog.addEventListener("click", () => {
    littleModal.classList.remove("modalHidden");
});

littleModal.addEventListener("click", () => {
    littleModal.classList.add("modalHidden");
});

//чтобы клик по фону закрывал модальное окно, но клик внутри littleModalBody — нет
littleModalBody.addEventListener("click", (event) => {
    event.stopPropagation();
})

btnCloselittleModal.addEventListener("click", () => { littleModal.classList.add("modalHidden"); });
btnOklittleModal.addEventListener("click", () => {
    littleModal.classList.add("modalHidden");
    winDialog.classList.add("dialogHidden");
});












