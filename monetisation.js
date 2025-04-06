// Fonctionnalités de monétisation

// Affichage du popup de capture d'emails
document.addEventListener('DOMContentLoaded', function() {
  // Afficher le popup après 5 secondes
  setTimeout(function() {
    showEmailPopup();
  }, 5000);
  
  // Fermer le popup quand on clique sur la croix
  const closeButton = document.querySelector('.close-popup');
  if (closeButton) {
    closeButton.addEventListener('click', function() {
      hideEmailPopup();
    });
  }
  
  // Gérer la soumission du formulaire popup
  const popupForm = document.getElementById('popup-form');
  if (popupForm) {
    popupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      subscribeToNewsletter(email, 'popup');
      hideEmailPopup();
      showThankYouMessage();
    });
  }
  
  // Gérer la soumission du formulaire footer
  const footerForm = document.getElementById('footer-newsletter-form');
  if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      subscribeToNewsletter(email, 'footer');
      this.reset();
      showThankYouMessage();
    });
  }
});

// Fonctions pour le popup
function showEmailPopup() {
  const popup = document.getElementById('email-popup');
  if (popup && !getCookie('popupShown')) {
    popup.style.display = 'flex';
    setCookie('popupShown', 'true', 7); // Ne pas montrer le popup pendant 7 jours
  }
}

function hideEmailPopup() {
  const popup = document.getElementById('email-popup');
  if (popup) {
    popup.style.display = 'none';
  }
}

// Fonction pour s'abonner à la newsletter
function subscribeToNewsletter(email, source) {
  // Ici, vous intégrerez le code pour envoyer l'email à votre service de newsletter
  console.log(`Email ${email} subscribed from ${source}`);
  
  // Exemple avec localStorage pour le développement
  const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
  subscribers.push({
    email: email,
    source: source,
    date: new Date().toISOString()
  });
  localStorage.setItem('subscribers', JSON.stringify(subscribers));
}

// Afficher un message de remerciement
function showThankYouMessage() {
  alert('Merci pour votre inscription ! Vous allez recevoir votre guide gratuit par email.');
}

// Fonctions utilitaires pour les cookies
function setCookie(name, value, days) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Tracking des liens d'affiliation
document.addEventListener('DOMContentLoaded', function() {
  const affiliateLinks = document.querySelectorAll('a[rel="nofollow"]');
  
  affiliateLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Enregistrer le clic pour les statistiques
      trackAffiliateClick(this.href, this.textContent.trim());
    });
  });
});

function trackAffiliateClick(url, linkText) {
  // Ici, vous intégrerez le code pour suivre les clics sur les liens d'affiliation
  console.log(`Affiliate link clicked: ${url} (${linkText})`);
  
  // Exemple avec localStorage pour le développement
  const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
  clicks.push({
    url: url,
    text: linkText,
    date: new Date().toISOString()
  });
  localStorage.setItem('affiliateClicks', JSON.stringify(clicks));
}
