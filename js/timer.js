function startTimer(duration) {
    let remaining = duration;

    function updateTimer() {
      if (remaining <= 0) {
        remaining = duration; // Сбрасываем таймер для зацикливания
      }

      const days = Math.floor(remaining / (60 * 60 * 24));
      const hours = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((remaining % (60 * 60)) / 60);
      const seconds = Math.floor(remaining % 60);
      const dayst = Math.floor(remaining / (60 * 60 * 24));
      const hourst = Math.floor((remaining % (60 * 60 * 24)) / (60 * 60));
      const minutest = Math.floor((remaining % (60 * 60)) / 60);
      const secondst = Math.floor(remaining % 60);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
      document.getElementById('dayst').textContent = days;
      document.getElementById('hourst').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutest').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('secondst').textContent = seconds.toString().padStart(2, '0');

      remaining--; // Уменьшаем оставшееся время
    }

    updateTimer();
    setInterval(updateTimer, 1000); // Обновляем каждую секунду
  }

  // Задаём продолжительность цикла (например, 5 дней)
  const duration = 5 * 24 * 60 * 60; // В секундах (5 дней)
  startTimer(duration);