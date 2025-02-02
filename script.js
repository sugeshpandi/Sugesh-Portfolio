document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const unorder = document.querySelector('.unorder');

  hamburger.addEventListener('click', function() {
    unorder.style.display = unorder.style.display === "block" ? "none" : "block";
    if (unorder.style.display === "block") {
      unorder.style.display = "block";
    } else {
      unorder.style.display = "none";
    }
  });
});
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-input');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('message', message);

  fetch('https://your-email-service.com/send-email', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
});
