function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var footerBtn = document.getElementById("footer-btn");

  if (!name || !email) {
      alert("Please fill out all required fields.");
      return;
  }

  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  var params = {
      name: name,
      email: email,
      message: message,
  };

  const serviceID = "service_tc05l4o";
  const templateID = "template_8yrreye";

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          footerBtn.innerHTML = "<i class='fa-solid fa-check'></i>";
          setTimeout(() => {
              footerBtn.textContent = "Submit";
          }, 3000);
      })
      .catch(err => {
          console.log(err);
          alert("Something went wrong. Please try again later.");
      });
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
