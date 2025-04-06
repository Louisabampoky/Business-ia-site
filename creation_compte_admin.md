# Guide de création du compte administrateur

Ce document explique comment créer et configurer votre compte administrateur pour gérer le contenu du site Business IA.

## Prérequis

Pour administrer le site Business IA, vous aurez besoin de :
- Un compte GitHub (gratuit)
- Un accès au dépôt GitHub du site

## Étape 1: Créer un compte GitHub

Si vous n'avez pas encore de compte GitHub :

1. Rendez-vous sur [GitHub.com](https://github.com)
2. Cliquez sur "Sign up" (S'inscrire)
3. Suivez les instructions pour créer votre compte :
   - Entrez votre adresse email
   - Créez un mot de passe sécurisé
   - Choisissez un nom d'utilisateur
   - Complétez la vérification
   - Sélectionnez le plan gratuit

## Étape 2: Créer un dépôt GitHub pour votre site

1. Connectez-vous à votre compte GitHub
2. Cliquez sur le bouton "+" en haut à droite, puis sélectionnez "New repository"
3. Nommez votre dépôt (par exemple "business-ia-site")
4. Choisissez l'option "Public"
5. Cochez "Add a README file"
6. Cliquez sur "Create repository"

## Étape 3: Importer les fichiers du site

1. Dans votre nouveau dépôt, cliquez sur "Add file" puis "Upload files"
2. Téléchargez tous les fichiers du site que nous vous avons fournis
3. Ajoutez un message de commit comme "Initial upload of website files"
4. Cliquez sur "Commit changes"

## Étape 4: Activer GitHub Pages

1. Dans votre dépôt, allez dans "Settings" (Paramètres)
2. Dans le menu latéral, cliquez sur "Pages"
3. Dans la section "Source", sélectionnez "main" comme branche
4. Cliquez sur "Save"
5. Attendez quelques minutes que GitHub déploie votre site
6. Notez l'URL fournie par GitHub Pages (format : username.github.io/repository-name)

## Étape 5: Configurer l'application OAuth GitHub

Suivez les instructions détaillées dans le document "github_oauth_setup.md" pour configurer l'authentification OAuth.

## Étape 6: Accéder à l'interface d'administration

1. Accédez à votre site via l'URL GitHub Pages
2. Ajoutez "/admin" à la fin de l'URL (exemple : username.github.io/repository-name/admin)
3. Cliquez sur "Se connecter avec GitHub"
4. Autorisez l'application à accéder à votre compte GitHub
5. Vous êtes maintenant connecté en tant qu'administrateur et pouvez modifier le contenu du site

## Sécurité du compte administrateur

- Utilisez un mot de passe fort pour votre compte GitHub
- Activez l'authentification à deux facteurs sur GitHub
- Ne partagez jamais vos identifiants
- Déconnectez-vous après chaque session d'administration
- Vérifiez régulièrement les activités de votre compte GitHub
