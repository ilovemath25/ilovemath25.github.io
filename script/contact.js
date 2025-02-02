document.getElementById("submit").addEventListener("click", function (e) {
   e.preventDefault();
   const form = document.getElementById("contact-form");
   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;
   const submit = document.getElementById("submit");
   const status = document.getElementById("form-status");
   submit.disabled = true;
   submit.innerHTML = "Sending...";
   if (!name) status.innerHTML = "Name cannot be empty";
   else if (name.length < 3) status.innerHTML = "Name must be at least 3 characters long";
   else if (!email) status.innerHTML = "Email cannot be empty";
   else if (!email.includes("@") || !email.includes(".")) status.innerHTML = "Invalid email address";
   else if (!message) status.innerHTML = "Message cannot be empty";
   else if (message.length < 10) status.innerHTML = "Message must be at least 10 characters long";
   else {
      fetch("https://formspree.io/f/mgvoylnr", {
         method: "POST",
         headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
         },
         body: JSON.stringify({ name: name, email: email, message: message })
      })
      .then(response => {
         if (response.ok) {
         status.innerHTML = "Thanks for your submission!";
         form.reset()
         }
         else status.innerHTML = "Oops! There was a problem submitting your form"
         submit.disabled = false;
         submit.innerHTML = "Send";
      })
      .catch(() => {
         status.innerHTML = "Oops! There was a problem submitting your form"
      });
   }
});

loadHTML('header', 'subpageHeaderHTML', '../');
loadHTML('footer', 'footerHTML', '../');
window.addEventListener("load", function() {
   document.querySelector("body").style.display = "block";
});