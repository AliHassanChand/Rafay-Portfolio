import emailjs from 'emailjs-com';

emailjs.init('cyCBaGs6mKkNKxGbT');

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var formData = {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    reply_to: document.getElementById('email').value,
    message: document.getElementById('message').value,
    number: document.getElementById('number').value
  };

  emailjs.send('service_in2q38a', 'template_r92hb0i', formData)
    .then(function(response) {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
      alert('Error sending message: ' + JSON.stringify(error));
    });
});
