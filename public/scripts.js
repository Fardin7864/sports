document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname;
    var home = document.getElementById("home");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");

    if (currentPage === "/index.html") {
      home.style.color = "red";
      home.classList.add("active");
    } else if (currentPage === "/about.html") {
      about.style.color = "red";
    } else if (currentPage === "/contact") {
      contact.style.color = "red";
    }
  });

