document.addEventListener('DOMContentLoaded', () => {
  const heroHeading = document.getElementById('hero-heading');

  heroHeading.addEventListener('mouseover', () => {
    heroHeading.style.color = '#ff6347';
  });

  heroHeading.addEventListener('mouseout', () => {
    heroHeading.style.color = '';
  });
});