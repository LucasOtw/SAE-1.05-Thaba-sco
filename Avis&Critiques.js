// Utilisation de l'API Interection Oberver pour l'apparition des éléments
const ratio = 0.5;
const options = {
  root: null, // Détection du scroll de la souris
  rootMargin: "0px", // Si besoin de marges
  threshold: 0.4,
};

const intersectionCallback = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target); 
    }
  });
};

const observer = new IntersectionObserver(intersectionCallback, options);


const intersection = function () {
  console.log('Intersection');
};

observer.observe(document.querySelector('.reveal'));
