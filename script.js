document.addEventListener('DOMContentLoaded', function () {
  // Animate skill bars when page loads
  const bars = document.querySelectorAll('.progress');
  bars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = percent + '%';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all projects with class "project-item"
  const projectItems = document.querySelectorAll('.project-item');
  projectItems.forEach(item => {
    item.style.cursor = "pointer"; // Make it look clickable
    item.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  

  
  const canvas = document.getElementById('myCanvas');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // Draw a rectangle
    ctx.fillStyle = "#4070f4";
    ctx.fillRect(30, 30, 110, 60);

    // Draw a circle
    ctx.beginPath();
    ctx.arc(210, 75, 40, 0, 2 * Math.PI);
    ctx.fillStyle = "#9552e8";
    ctx.fill();
    ctx.closePath();

    
    ctx.font = "17px 'Segoe UI', Arial";
    ctx.fillStyle = "#232849";
    ctx.fillText("Canvas Demo", 100, 150);
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Image Slider Logic
  const images = document.querySelectorAll('.slider-img');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = (i === index) ? 'block' : 'none';
    });
  }

  document.getElementById('prevBtn').addEventListener('click', function() {
    current = (current === 0) ? images.length - 1 : current - 1;
    showImage(current);
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    current = (current === images.length - 1) ? 0 : current + 1;
    showImage(current);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Optional: Remember mode between visits
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ Light Mode';
  }

  toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
      toggleBtn.textContent = '☀️ Light Mode';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleBtn.textContent = '🌙 Dark Mode';
      localStorage.setItem('theme', 'light');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', function() {
    // Show the button when you scroll down 150px
    if (window.pageYOffset > 150) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
