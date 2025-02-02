function startTimer(duration) {
  let remaining = duration;

  function updateTimer() {
    if (remaining <= 0) {
      remaining = duration; // Сбрасываем таймер для зацикливания
    }

    const timeValues = {
      days: Math.floor(remaining / (60 * 60 * 24)),
      hours: Math.floor((remaining % (60 * 60 * 24)) / (60 * 60)),
      minutes: Math.floor((remaining % (60 * 60)) / 60),
      seconds: remaining % 60
    };

    // Обновление всех элементов с id 'days', 'daysT', 'hours', 'hoursT' и т. д.
    Object.entries(timeValues).forEach(([key, value]) => {
      document.querySelectorAll(`#${key}, #${key}t`).forEach(el => {
        el.textContent = value.toString().padStart(2, '0');
      });
    });

    remaining--; // Уменьшаем оставшееся время
  }

  updateTimer();
  setInterval(updateTimer, 1000); // Обновляем каждую секунду
}

// Задаём продолжительность цикла (например, 5 дней)
const duration = 5 * 24 * 60 * 60; // В секундах (5 дней)
startTimer(duration);
