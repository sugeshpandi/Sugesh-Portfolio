document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const unorder = document.querySelector('.unorder');
  
  hamburger.addEventListener('click', function() {
  if (unorder.style.display === "block") {
    unorder.style.display = "none";
  } else {
    unorder.style.display = "block";
  }
});
const contactForm = document.querySelector('.contact-form');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const params = {
    from_name: name,
    to_name: 'sugeshpandisaravana',
    message: message,
    reply_to: email,
  };

  const serviceID = 'default_service';
  const templateID = 'template_12345';

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      console.log('success', res.status);
      alert('Message sent successfully!');
    })
    .catch((err) => console.error('Failed to send message', err));
});
});
