// Переключение отображения грамоты
function toggleAchievements() {
    const achievementsBlock = document.getElementById('achievements-block');
    achievementsBlock.style.display =
      achievementsBlock.style.display === 'none' ? 'flex' : 'none';
  }
  
  // Переключение отображения проекта
  function toggleProjects() {
    const projectsBlock = document.getElementById('projects-block');
    projectsBlock.style.display =
      projectsBlock.style.display === 'none' ? 'flex' : 'none';
  }
  
  // Переход на страницу контактов
  function navigateToContact() {
    window.location.href = 'contact.html';
  }

  // Отправка сообщения (заглушка)
function sendMessage(event) {
    event.preventDefault();
    alert('Ваше сообщение отправлено! Спасибо за обращение.');
  }

  document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращает реальный submit
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    this.reset(); // Сбрасывает поля формы
  });
  