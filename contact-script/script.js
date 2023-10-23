function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var footerBtn = document.getElementById("footer-btn");

  if (!name || !email || !phone ) {
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
    phone: phone,
    message: message,
  };

  const serviceID = "service_bgbrhek";
  const templateID = "template_gmi79q6";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
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
