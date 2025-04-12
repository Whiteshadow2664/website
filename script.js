function showContact(type) {
  const contact = {
    phone: "📞 +91-1234567890",
    email: "✉️ your.email@example.com",
    linkedin: "🔗 linkedin.com/in/yourprofile"
  };
  document.getElementById('contact-info').innerText = contact[type];
}