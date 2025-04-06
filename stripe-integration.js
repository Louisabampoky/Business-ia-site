// Configuration Stripe pour la vente de l'ebook premium
// Ce fichier contient le code nécessaire pour intégrer le bouton de paiement Stripe

// Fonction pour initialiser le bouton Stripe
function initStripeButton() {
  // Prix de l'ebook en centimes d'euros (29€ = 2900 centimes)
  const ebookPriceCents = 2900;
  
  // Titre de l'ebook
  const ebookTitle = 'Guide Complet: Business IA Sans Compétences et Sans Budget';
  
  // Créer le bouton Stripe
  const checkoutButton = document.getElementById('stripe-button-container');
  
  checkoutButton.addEventListener('click', function() {
    // Rediriger vers la page de paiement Stripe
    // Dans un environnement réel, cette partie utiliserait l'API Stripe.js
    // et créerait une session de paiement côté serveur
    
    // Simulation d'une redirection vers Stripe Checkout
    const stripeForm = document.createElement('form');
    stripeForm.method = 'POST';
    stripeForm.action = 'merci.html'; // Simulation - normalement ce serait l'URL de Stripe
    
    // Ajouter des champs cachés pour simuler les données envoyées à Stripe
    const productField = document.createElement('input');
    productField.type = 'hidden';
    productField.name = 'product';
    productField.value = ebookTitle;
    stripeForm.appendChild(productField);
    
    const priceField = document.createElement('input');
    priceField.type = 'hidden';
    priceField.name = 'price';
    priceField.value = ebookPriceCents;
    stripeForm.appendChild(priceField);
    
    // Ajouter le formulaire au document et le soumettre
    document.body.appendChild(stripeForm);
    
    // Afficher un message de chargement
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) {
      loadingMessage.style.display = 'block';
      loadingMessage.innerHTML = 'Redirection vers la page de paiement sécurisée...';
    }
    
    // Soumettre le formulaire après un court délai pour simuler le chargement
    setTimeout(() => {
      stripeForm.submit();
    }, 1500);
  });
}
