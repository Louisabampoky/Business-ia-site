// Configuration PayPal pour la vente de l'ebook premium
// Ce fichier contient le code nécessaire pour intégrer le bouton de paiement PayPal

// Fonction pour initialiser le bouton PayPal
function initPayPalButton() {
  // Prix de l'ebook en euros
  const ebookPrice = '29.00';
  
  // Titre de l'ebook
  const ebookTitle = 'Guide Complet: Business IA Sans Compétences et Sans Budget';
  
  // Créer le bouton PayPal
  paypal.Buttons({
    // Style du bouton
    style: {
      shape: 'rect',
      color: 'blue',
      layout: 'vertical',
      label: 'pay',
    },

    // Création de la commande
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          description: ebookTitle,
          amount: {
            currency_code: 'EUR',
            value: ebookPrice
          }
        }]
      });
    },

    // Quand le paiement est approuvé
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        // Afficher un message de confirmation
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.innerHTML = 'Merci pour votre achat, ' + details.payer.name.given_name + '! Votre ebook va être livré à votre adresse email.';
        confirmationMessage.style.display = 'block';
        
        // Envoyer l'email avec l'ebook (simulation)
        // Dans un environnement réel, cette partie serait gérée par un webhook ou un service backend
        setTimeout(function() {
          window.location.href = 'merci.html';
        }, 3000);
      });
    },

    // En cas d'erreur
    onError: function(err) {
      console.log(err);
      const errorMessage = document.getElementById('error-message');
      errorMessage.innerHTML = 'Une erreur est survenue lors du traitement de votre paiement. Veuillez réessayer.';
      errorMessage.style.display = 'block';
    }
  }).render('#paypal-button-container');
}
