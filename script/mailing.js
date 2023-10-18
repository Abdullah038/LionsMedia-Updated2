function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_tc05l4o";
  const templateID = "template_8yrreye";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Thank you for reaching out to Lions Media! We'll get back to you shortly. We appreciate your patience.")

    })
    .catch(err=>console.log(err));

}