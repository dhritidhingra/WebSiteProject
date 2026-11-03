/* ==========================================
   BREW & BLOSSOM CAFE - INTERACTIVITY SCRIPT
   ========================================== */

// 1. Dynamic UI Action: Mobile Navigation Drawer Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// 2. JavaScript Form Validation & Handling
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[type="email"]');
            
            // Check if name field is filled out via JS
            if (nameInput && nameInput.value.trim() === '') {
                e.preventDefault();
                alert('Validation Error: Please enter your full name before submitting.');
                nameInput.focus();
                return false;
            }
            
            // Client-side email validation check
            if (emailInput && (!emailInput.value.includes('@') || !emailInput.value.includes('.'))) {
                e.preventDefault();
                alert('Validation Error: Please enter a valid email address containing an "@" and domain extension.');
                emailInput.focus();
                return false;
            }
            
            // If validation passes, Formspree will process the submission normally
        });
    });
});