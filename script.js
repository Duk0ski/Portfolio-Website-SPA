// Mobile menu toggle
document.querySelector('.mobile-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Skill bars animation
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
}

// Run animation when skills section is in view
const skillsSection = document.querySelector('#skills');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

observer.observe(skillsSection);

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Active navigation link handling
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing animation with fixed prefix
const typedTextElement = document.getElementById('typed-text');
const textsToType = [
    " Full-Stack Developer.",
    " student at the FINKI.",
    " Freelancer."
];
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textsToType[textIndex].length) {
        typedTextElement.textContent += textsToType[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 50); // Adjust typing speed here (milliseconds)
    } else {
        // Wait a bit after typing is complete before starting to erase
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (typedTextElement.textContent.length > 0) {
        typedTextElement.textContent = typedTextElement.textContent.substring(0, typedTextElement.textContent.length - 1);
        setTimeout(eraseText, 25); // Adjust erasing speed here (milliseconds)
    } else {
        // Move to next text
        textIndex = (textIndex + 1) % textsToType.length;
        charIndex = 0;
        setTimeout(typeText, 500);
    }
}

// Start the typing animation when the page loads
window.addEventListener('load', function() {
    setTimeout(typeText, 1000);
});