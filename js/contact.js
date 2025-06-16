// Additional contact page functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    // Add focus effects
    const inputs = contactForm.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentNode.classList.add('focused');
      });
      
      input.addEventListener('blur', () => {
        input.parentNode.classList.remove('focused');
      });
    });
    
    // Project checkbox effect
    const projectCheckbox = contactForm.querySelector('input[name="project"]');
    if (projectCheckbox) {
      projectCheckbox.addEventListener('change', function() {
        const enquiryField = contactForm.querySelector('input[name="enquiry"]');
        if (this.checked) {
          enquiryField.placeholder = "Tell me about your project...";
        } else {
          enquiryField.placeholder = "Enquiry";
        }
      });
    }
  }
});