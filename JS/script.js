// DOM
let form = document.getElementById('userForm');
let resultsection = document.getElementById('resultSection')

// Local storage
let savedUser = JSON.parse(localStorage.getItem("user"));
if (savedUser) {
  showContent(savedUser.name, savedUser.age);
}


window.onload = () => {
    const savedName = localStorage.getItem('name');
    const savedAge = localStorage.getItem('age');
    
    if (savedName && savedAge) {
        updateUI(savedName, savedAge);
    }
};

// Handle Form Submission
userForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page refresh
    
    const name = document.getElementById('userName').value;
    const age = document.getElementById('userAge').value;

    // Store in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    updateUI(name, age);
});

// Main Function to Update the Page
function updateUI(name, age) {
    resultSection.classList.remove('hidden');

    // Personalized Greeting (Template Literal)
    document.getElementById('greeting').innerText = `Hello, ${name}! `;

    //  Age Calculation
    const months = age * 12;
    document.getElementById('monthsDisplay').innerText = `You have been alive for approximately ${months} months.`;

    // 3. Conditional Content (Age Check)
    const statusEl = document.getElementById('ageStatus');
    if (age >= 18) {
        statusEl.innerText = "Access Granted: You are old enough for adult content.";
        statusEl.style.color = "green";
    } else {
        statusEl.innerText = "Access Restricted: You are too young for adult content.";
        statusEl.style.color = "red";
    }

    // 4. Loop for Motivational Quotes
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerHTML = ""; // Clear previous quotes
    
    for (let i = 0; i < 5; i++) {
        const p = document.createElement('p');
        p.innerText = `${i + 1}. "Believe you can and you're halfway there."`;
        quoteContainer.appendChild(p);
    }
}