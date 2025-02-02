// Получаем все изображения и соответствующие модальные окна
const images = document.querySelectorAll(".rew-ph .thumbnail");
const modals = document.querySelectorAll(".modal");
const modalImages = document.querySelectorAll(".modal-content");
const closeButtons = document.querySelectorAll(".close");

// Обрабатываем клик на изображение
images.forEach((img, index) => {
  img.onclick = function() {
    modals[index].style.display = "block"; // Показываем модальное окно соответствующего изображения
    modalImages[index].src = this.src; // Устанавливаем источник изображения для модального окна
  };
});

// Обрабатываем клик на кнопку закрытия
closeButtons.forEach(button => {
  button.onclick = function() {
    const modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "none"; // Скрываем модальное окно
  };
});

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};