// 1. Select the filter buttons and class cards
const filterButtons = document.querySelectorAll('.filter-btn');
const classCards = document.querySelectorAll('.class-card');

// 2. Function to filter classes based on category
function filterClasses(category) {
    classCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 3. Add click event listeners to the filter buttons and store choice
filterButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const selectedCategory = event.target.getAttribute('data-category');
        filterClasses(selectedCategory);
        localStorage.setItem('preferredFilter', selectedCategory);
    });
});

// 4. Load saved filter choice from localStorage when the page opens
window.addEventListener('DOMContentLoaded', () => {
    const savedFilter = localStorage.getItem('preferredFilter');
    if (savedFilter) {
        filterClasses(savedFilter);
    }
});
// Form Validation Logic
const eventForm = document.querySelector('form');

if (eventForm) {
    eventForm.addEventListener('submit', (event) => {
        // 1. Stop default form submission/page reload
        event.preventDefault();

        // 2. Target the inputs and error elements
        const nameInput = document.getElementById('full-name');
        const emailInput = document.getElementById('email-addr');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');

        let isValid = true;

        // 3. Validate Name field
        if (nameInput.value.trim() === '') {
            if (nameError) nameError.style.display = 'block';
            isValid = false;
        } else {
            if (nameError) nameError.style.display = 'none';
        }

        // 4. Validate Email field (checks if empty or missing '@')
        if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
            if (emailError) emailError.style.display = 'block';
            isValid = false;
        } else {
            if (emailError) emailError.style.display = 'none';
        }

        // 5. If all checks pass, show success
        if (isValid) {
            alert('Spot requested successfully!');
            eventForm.reset();
        }
    });
}
