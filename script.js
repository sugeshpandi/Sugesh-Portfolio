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
});
