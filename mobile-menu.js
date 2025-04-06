// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const body = document.body;
  
  // Créer l'overlay pour le menu mobile
  const menuOverlay = document.createElement('div');
  menuOverlay.className = 'menu-overlay';
  body.appendChild(menuOverlay);
  
  if (mobileMenuToggle && navMenu) {
    // Fonction pour ouvrir/fermer le menu
    function toggleMenu() {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      
      // Empêcher le défilement du body quand le menu est ouvert
      if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    }
    
    // Événement pour le bouton du menu
    mobileMenuToggle.addEventListener('click', toggleMenu);
    
    // Fermer le menu quand on clique sur l'overlay
    menuOverlay.addEventListener('click', toggleMenu);
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
    
    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
    
    // Ajuster le menu lors du redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }
});
