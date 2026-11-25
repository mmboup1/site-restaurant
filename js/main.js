/* =========================================================
   Le Petit Baobab - JavaScript commun à toutes les pages
   Rôle :
   1. ouvrir et fermer le menu de navigation sur téléphone
   2. page Contact : charger la carte Google Maps seulement
      après un clic du visiteur (RGPD)
   ========================================================= */

// Ajoute la classe "js" sur la balise <html>.
// Le CSS cache le menu sur téléphone seulement si cette classe existe :
// si JavaScript ne marche pas, le menu reste donc toujours visible.
document.documentElement.classList.add('js');

// On récupère le bouton hamburger et le menu de navigation
const boutonMenu = document.querySelector('.bouton-menu');
const navigation = document.querySelector('.navigation');

// On vérifie que les deux éléments existent bien dans la page
if (boutonMenu && navigation) {

  // À chaque clic sur le bouton...
  boutonMenu.addEventListener('click', function () {

    // ...on ajoute la classe "ouvert" si elle n'y est pas, ou on l'enlève.
    // toggle renvoie true si le menu vient de s'ouvrir, false sinon.
    const estOuvert = navigation.classList.toggle('ouvert');

    // On met à jour l'état du bouton pour les lecteurs d'écran
    // (et le CSS s'en sert pour transformer les traits en croix)
    boutonMenu.setAttribute('aria-expanded', String(estOuvert));

    // On change aussi le texte lu par les lecteurs d'écran
    boutonMenu.setAttribute('aria-label', estOuvert ? 'Fermer le menu' : 'Ouvrir le menu');
  });
}


/* ----- 2. Carte Google Maps chargée seulement après un clic (RGPD) ----- */

// On récupère le bouton "Afficher la carte" et l'encadré qui l'entoure.
// Ils n'existent que sur la page Contact : sur les autres pages,
// querySelector renvoie null et le "if" ci-dessous ne fait rien.
const boutonCarte = document.querySelector('.bouton-carte');
const zoneCarte = document.querySelector('.plan-zone');

if (boutonCarte && zoneCarte) {

  boutonCarte.addEventListener('click', function () {

    // On fabrique une balise <iframe> en JavaScript
    const carte = document.createElement('iframe');
    carte.className = 'plan';                          // pour le style CSS
    carte.src = boutonCarte.dataset.src;               // lit l'attribut data-src
    carte.title = 'Carte Google Maps du centre de Poitiers'; // pour les lecteurs d'écran
    carte.referrerPolicy = 'no-referrer-when-downgrade';

    // On remplace l'encadré par la carte : c'est seulement maintenant
    // que la page contacte Google
    zoneCarte.replaceWith(carte);

    // Le bouton a disparu : on place le focus sur la carte pour que
    // la personne qui navigue au clavier ne soit pas renvoyée en haut de la page
    carte.focus();
  });
}
