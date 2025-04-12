function showContact(type) {
  const contact = {
    phone: "Call me at: +91-1234567890",
    email: "Email me at: your.email@example.com",
    linkedin: "Connect on LinkedIn: linkedin.com/in/yourprofile"
  };
  document.getElementById('contact-info').innerText = contact[type];
}