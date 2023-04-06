
let mobileMenu = document.querySelector('.mobile__menu');
const burger = () => {
  mobileMenu.classList.toggle('active');
};



function sendForm() {
  // get form elements
  var form = document.getElementById("contact-form");
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var last = "";
  var phone = "";

  // Check if required fields are filled
  if (name === "" || email === "") {
    if (name === "") {
      document.getElementById("name").style.borderColor = "red";
    }
    if (email === "") {
      document.getElementById("email").style.borderColor = "red";
    }
    return;
  }

  // Reset border color if fields have been previously marked
  document.getElementById("name").style.borderColor = "";
  document.getElementById("email").style.borderColor = "";

  // Check if optional fields are filled
  if (document.getElementById("last")) {
    last = document.getElementById("last").value;
  }

  if (document.getElementById("phone")) {
    phone = document.getElementById("phone").value;
  }

  // create new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // prepare data to be sent
  var data = new FormData();
  data.append("name", name);
  data.append("email", email);
  data.append("message", message);

  if (last !== "") {
    data.append("last", last);
  }

  if (phone !== "") {
    data.append("phone", phone);
  }

  // set up the request
  xhr.open("POST", "send-email.php");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  // handle the response from the server
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // show success message
        document.getElementById("form-feedback").innerHTML = "Message sent successfully!";
        document.getElementById("form-feedback").style.color = "green";
        form.reset();
      } else {
        // show error message
        alert("An error occurred while sending the email.");
      }
    }
  };

  // send the request with the form data
  xhr.send(data);
}

// attach the event listener to the form's submit event
var form = document.getElementById("contact-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  sendForm();
});
