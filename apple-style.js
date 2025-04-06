// Animation pour les éléments au défilement
document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour vérifier si un élément est visible dans la fenêtre
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }

  // Fonction pour ajouter la classe 'visible' aux éléments visibles
  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.card, .feature, .testimonial, .faq-item, .tier-card');
    
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  }

  // Exécuter une fois au chargement
  handleScrollAnimation();
  
  // Ajouter l'événement de défilement
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Navigation mobile
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }
  
  // Smooth scroll pour les liens d'ancrage
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Simulation des boutons de paiement
  const paymentButtons = document.querySelectorAll('.tier-button, .btn[data-tier], #paypal-button, #stripe-button');
  
  paymentButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tier = this.getAttribute('data-tier') || this.id;
      alert(`Dans un environnement réel, vous seriez redirigé vers une page de paiement sécurisée pour "${tier}".`);
    });
  });
  
  // Gestion du formulaire de newsletter
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        // Simuler l'envoi du formulaire
        const successMessage = document.createElement('div');
        successMessage.className = 'email-sent-notification';
        successMessage.innerHTML = '<p>✓ Merci pour votre inscription! Vous recevrez bientôt nos conseils exclusifs.</p>';
        
        // Remplacer le formulaire par le message de succès
        this.innerHTML = '';
        this.appendChild(successMessage);
      } else {
        alert('Veuillez entrer une adresse email valide.');
      }
    });
  });
  
  // Détection du mode sombre pour ajuster les images
  function updateImagesForDarkMode(isDarkMode) {
    const placeholderImages = document.querySelectorAll('img[src*="placeholder.com"]');
    
    placeholderImages.forEach(img => {
      const currentSrc = img.getAttribute('src');
      if (isDarkMode) {
        // Remplacer les couleurs pour le mode sombre
        const darkModeSrc = currentSrc.replace('/f5f5f7/', '/2d2d2f/').replace('/1d1d1f/', '/f5f5f7/');
        img.setAttribute('src', darkModeSrc);
      } else {
        // Revenir aux couleurs claires
        const lightModeSrc = currentSrc.replace('/2d2d2f/', '/f5f5f7/').replace('/f5f5f7/', '/1d1d1f/');
        img.setAttribute('src', lightModeSrc);
      }
    });
  }
  
  // Vérifier la préférence de mode sombre
  if (window.matchMedia) {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    updateImagesForDarkMode(darkModeMediaQuery.matches);
    
    // Écouter les changements de préférence
    darkModeMediaQuery.addEventListener('change', e => {
      updateImagesForDarkMode(e.matches);
    });
  }
});
