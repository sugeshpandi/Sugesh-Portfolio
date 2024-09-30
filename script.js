document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const unorder = document.querySelector('.unorder');

  hamburger.addEventListener('click', function() {
    unorder.style.display = unorder.style.display === "block" ? "none" : "block";
  });
}