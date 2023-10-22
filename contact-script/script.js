// function ContactUsMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       phone: document.getElementById("phone").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_bgbrhek";
//     const templateID = "template_flos52b";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("phone").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }


function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
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
      alert("Your message sent successfully!!");
    })
    .catch(err => console.log(err));
}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
