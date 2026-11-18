/* =========================================================
   Le Petit Baobab - JavaScript commun à toutes les pages
   Rôle : ouvrir et fermer le menu de navigation sur téléphone
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
