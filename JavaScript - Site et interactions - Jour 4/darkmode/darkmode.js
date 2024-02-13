document.addEventListener("DOMContentLoaded", function () {
  var darkModeBtn = document.getElementById("darkModeBtn");
  darkModeBtn.addEventListener("click", toggleDarkMode);

  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
});
