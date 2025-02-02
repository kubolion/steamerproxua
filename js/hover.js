const hoverableBlocks = document.querySelectorAll('.st-hover');
     
hoverableBlocks.forEach((block) => {
   block.addEventListener('click', () => {
      // Проверяем, есть ли класс активного состояния
      if (block.classList.contains('hover-active')) {
         block.classList.remove('hover-active');
      } else {
         // Убираем эффект с других блоков
         hoverableBlocks.forEach((b) => b.classList.remove('hover-active'));
         // Добавляем эффект только на текущий блок
         block.classList.add('hover-active');

         // Удаляем класс через 3 секунды
         setTimeout(() => {
            block.classList.remove('hover-active');
         }, 1500);
      }
   });
});