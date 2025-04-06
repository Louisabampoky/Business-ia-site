# Guide d'utilisation du système d'administration Business IA

Ce guide complet vous explique comment utiliser l'interface d'administration pour gérer le contenu de votre site Business IA.

## Table des matières

1. [Introduction](#introduction)
2. [Accès à l'interface d'administration](#accès-à-linterface-dadministration)
3. [Vue d'ensemble de l'interface](#vue-densemble-de-linterface)
4. [Modification des pages principales](#modification-des-pages-principales)
5. [Gestion des pages légales](#gestion-des-pages-légales)
6. [Ajout et gestion des médias](#ajout-et-gestion-des-médias)
7. [Publication des modifications](#publication-des-modifications)
8. [Résolution des problèmes courants](#résolution-des-problèmes-courants)

## Introduction

Le système d'administration de Business IA est basé sur Decap CMS, un CMS moderne qui vous permet de modifier facilement le contenu de votre site sans connaissances techniques avancées. Toutes les modifications que vous effectuez sont automatiquement enregistrées dans votre dépôt GitHub et déployées sur votre site.

## Accès à l'interface d'administration

1. Ouvrez votre navigateur web
2. Accédez à l'URL : `https://[votre-domaine]/admin/`
3. Cliquez sur "Se connecter avec GitHub"
4. Autorisez l'application si demandé
5. Vous êtes maintenant connecté à l'interface d'administration

## Vue d'ensemble de l'interface

L'interface d'administration est divisée en plusieurs sections :

- **Barre latérale gauche** : Navigation entre les différentes collections (Pages, Pages légales)
- **Zone principale** : Affiche la liste des contenus ou l'éditeur de contenu
- **Barre supérieure** : Options de publication et statut des modifications

## Modification des pages principales

### Page d'accueil

1. Dans la barre latérale, cliquez sur "Pages"
2. Sélectionnez "Page d'accueil"
3. Modifiez les champs suivants :
   - **Titre** : Le titre principal de la page
   - **Description** : La méta-description pour le SEO
   - **Contenu principal** : Le contenu de la page en format Markdown

### Page Idées

1. Dans la barre latérale, cliquez sur "Pages"
2. Sélectionnez "Page Idées"
3. Modifiez les champs comme pour la page d'accueil

### Page Ebook

1. Dans la barre latérale, cliquez sur "Pages"
2. Sélectionnez "Page Ebook"
3. Modifiez les champs, y compris le prix de l'ebook

### Page Consultation

1. Dans la barre latérale, cliquez sur "Pages"
2. Sélectionnez "Page Consultation"
3. Modifiez les champs selon vos besoins

## Gestion des pages légales

1. Dans la barre latérale, cliquez sur "Pages légales"
2. Sélectionnez la page légale que vous souhaitez modifier :
   - Mentions légales
   - CGV
   - CGU
   - Politique de confidentialité
3. Modifiez le contenu en respectant les obligations légales

## Ajout et gestion des médias

### Ajouter une image

1. Lors de l'édition d'une page, cliquez sur le bouton "+" dans l'éditeur
2. Sélectionnez "Image"
3. Cliquez sur "Choisir un fichier" pour télécharger une nouvelle image ou sélectionnez une image existante
4. Ajoutez un texte alternatif pour l'accessibilité
5. Cliquez sur "Insérer"

### Gérer la médiathèque

1. Dans la barre latérale, cliquez sur "Médias"
2. Vous pouvez voir toutes les images téléchargées
3. Pour supprimer une image, sélectionnez-la et cliquez sur "Supprimer"

## Publication des modifications

Après avoir effectué vos modifications :

1. Cliquez sur le bouton "Enregistrer" en haut à droite
2. Ajoutez un message de commit décrivant vos modifications (ex: "Mise à jour du prix de l'ebook")
3. Cliquez sur "Publier"
4. Vos modifications seront déployées sur le site en quelques minutes

## Résolution des problèmes courants

### Problème de connexion

Si vous ne parvenez pas à vous connecter :
- Vérifiez que vous utilisez le bon compte GitHub
- Assurez-vous que l'application OAuth est correctement configurée
- Essayez de vous déconnecter puis de vous reconnecter

### Modifications non publiées

Si vos modifications n'apparaissent pas sur le site :
- Vérifiez que vous avez bien cliqué sur "Publier" et non seulement "Enregistrer"
- Attendez quelques minutes pour le déploiement
- Vérifiez les actions GitHub pour voir s'il y a des erreurs de déploiement

### Erreurs lors de l'édition

Si vous rencontrez des erreurs lors de l'édition :
- Rafraîchissez la page
- Vérifiez que vous n'utilisez pas de caractères spéciaux non supportés
- Assurez-vous de respecter la structure des champs

Pour toute assistance supplémentaire, contactez le support à contact@business-ia.com
