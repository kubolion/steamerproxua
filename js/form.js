document.getElementById("product-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(this);
    
    fetch("/submit-form.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Форма успешно отправлена! Спасибо за ваш запрос.");
          this.reset();
        } else {
          alert("Произошла ошибка при отправке. Попробуйте снова.");
        }
      })
      .catch(() => {
        alert("Произошла ошибка при отправке. Попробуйте снова.");
      });
  });