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


  document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    var formData = new FormData(this);

    // Create an object to store form data
    var userData = {};
    formData.forEach(function(value, key){
        userData[key] = value;
    });

    console.log(userData);

    
    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('User added successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while adding the user.');
    });
    
});