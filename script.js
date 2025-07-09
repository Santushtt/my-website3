function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('show');
  }
  
  const scrollBtn = document.getElementById("scrollTop");
  window.onscroll = () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  