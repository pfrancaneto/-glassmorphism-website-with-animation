function menuToggle() {
  const menuToggle = document.querySelector('.toggle');
  const section = document.querySelector('section')
  menuToggle.classList.toggle('active');
  section.classList.toggle('active');
}