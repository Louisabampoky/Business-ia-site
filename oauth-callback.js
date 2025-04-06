// Script pour faciliter l'authentification GitHub OAuth
// Ce script est nécessaire pour permettre l'authentification via GitHub
// dans le contexte d'un site statique hébergé sur GitHub Pages

// Redirection vers GitHub pour l'authentification
if (window.location.hash.startsWith('#access_token=')) {
  const accessToken = window.location.hash.match(/\#access_token=(.*?)&/)[1];
  window.localStorage.setItem('netlify-cms-user', JSON.stringify({
    token: {
      access_token: accessToken
    }
  }));
  window.location.href = window.location.origin + window.location.pathname;
}
