function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
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
      console.log(res);
      alert("Thank you for reaching out to Lions Media! We'll get back to you shortly. We appreciate your patience.");
    })
    .catch(err => console.log(err));
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
