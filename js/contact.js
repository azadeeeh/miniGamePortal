document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
  
    form.addEventListener('submit', function(event) {
      let valid = true;
  
      // Validate name (only alphabets)
      const name = document.getElementById('name').value;
      const nameError = document.getElementById('nameError');
      const namePattern = /^[a-zA-Z\s]+$/;
      if (!name.match(namePattern)) {
        nameError.textContent = 'Invalid name. Only alphabets are allowed.';
        valid = false;
      } else {
        nameError.textContent = '';
      }
  
      // Validate email
      const email = document.getElementById('email').value;
      const emailError = document.getElementById('emailError');
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!email.match(emailPattern)) {
        emailError.textContent = 'Invalid email address.';
        valid = false;
      } else {
        emailError.textContent = '';
      }
  
      // Prevent form submission if validation failed
      if (!valid) {
        event.preventDefault();
      } else {
        // If validation is successful, display Thank You message
        thankYouMessage.textContent = `Thank you, ${name}!`;
        event.preventDefault();  // Optional: To prevent actual form submission if you want to stay on the same page
      }
    });
});
