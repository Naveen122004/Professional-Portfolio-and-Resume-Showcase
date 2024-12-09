// Add any interactivity here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
  });
  document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('dynamic-greeting');
    const hour = new Date().getHours();
  
    if (hour < 12) {
      greeting.textContent = 'Good Morning! Welcome to My Profile';
    } else if (hour < 18) {
      greeting.textContent = 'Good Afternoon! Welcome to My Profile';
    } else {
      greeting.textContent = 'Good Evening! Welcome to My Profile';
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Hobby Carousel
    const hobbies = ['Reading', 'Coding', 'Traveling', 'Photography', 'Cooking'];
    const hobbyElement = document.getElementById('hobby-carousel');
    let hobbyIndex = 0;
  
    setInterval(() => {
      hobbyIndex = (hobbyIndex + 1) % hobbies.length;
      hobbyElement.textContent = hobbies[hobbyIndex];
    }, 2000);
  });
  // Download Resume
function downloadResume() {
    window.location.href = 'path/to/resume.pdf';
  }
  
  // Modal Logic
  const projectDetails = {
    ecommerce: {
      title: 'E-Commerce Platform',
      description: 'A full-fledged e-commerce platform with user authentication, product management, and payment gateway integration.',
    },
    inventory: {
      title: 'Inventory Management System',
      description: 'A system to efficiently track inventory and manage surplus items with automation.',
    },
    portfolio: {
      title: 'Portfolio Website',
      description: 'A sleek portfolio showcasing my skills, projects, and accomplishments.',
    },
  };
  
  function openModal(project) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
  
    title.textContent = projectDetails[project].title;
    description.textContent = projectDetails[project].description;
  
    modal.style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('project-modal').style.display = 'none';
  }
  