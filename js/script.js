const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const form = document.querySelector('.booking-form');
form?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thanks for your request! We'll get back to you shortly.");
  form.reset();
});
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const org = document.getElementById("org").value.trim();
  const message = document.getElementById("message").value.trim();

  const encodedMessage = encodeURIComponent(
    `Hello Ready Hands! 👋\n\nI'd like to book a training session.\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n🏫 Organization: ${org}\n📝 Notes: ${message}`
  );

  const whatsappNumber = "254712345678"; // replace with your actual number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
});

