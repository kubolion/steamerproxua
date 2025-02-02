// Получаем все изображения и соответствующие модальные окна
const images = document.querySelectorAll(".rew-ph .thumbnail");
const modals = document.querySelectorAll(".modal");
const modalImages = document.querySelectorAll(".modal-content");
const closeButtons = document.querySelectorAll(".close");

// Обрабатываем клик на изображение
images.forEach((img, index) => {
  img.addEventListener("click", function() {
    modals[index].style.display = "block"; // Показываем модальное окно соответствующего изображения
    modalImages[index].src = this.src; // Устанавливаем источник изображения для модального окна
  });
});

// Обрабатываем клик на кнопку закрытия
closeButtons.forEach(button => {
  button.addEventListener("click", function() {
    const modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "none"; // Скрываем модальное окно
  });
});

// Закрытие модального окна при клике за его пределами
window.addEventListener("click", function(event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none"; // Закрываем модальное окно
    }
  });
});