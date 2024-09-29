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
  // Initialize EmailJS with your User ID
(function() {
  emailjs.init('YOUR_USER_ID'); // Replace 'YOUR_USER_ID' with your actual EmailJS User ID
})();

document.getElementById('contact').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the traditional way

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('purpose').value;
  const mobile = document.getElementById('mobile').value

  // Send form data using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: name,
    from_email: email,
    mobile : mobile,
    message: message
  })
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    document.getElementById('response-message').textContent = 'Message sent successfully!';
  }, function(error) {
    console.log('FAILED...', error);
    document.getElementById('response-message').textContent = 'Failed to send message. Please try again.';
  });
});

});
