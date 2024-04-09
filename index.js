
function sendMail(){
    var params = {
      from_name : document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value
    }
    emailjs.send("service_59afqpp","template_9le51nv",params).then(function(res){
      alert("success!"+res.status)
    })
  }