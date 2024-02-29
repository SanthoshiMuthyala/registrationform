document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Collect form data
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  // Send data via SMTP using Formspree (replace YOUR_EMAIL_ADDRESS with your actual email)
  fetch('https://formspree.io/muthyalasanthoshi479@gmail.com', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    alert('Registration successful!');
    this.reset(); // Reset the form after successful submission
  })
  .catch(error => {
    console.error('There was a problem with your registration:', error);
    alert('There was a problem with your registration. Please try again later.');
  });
});
