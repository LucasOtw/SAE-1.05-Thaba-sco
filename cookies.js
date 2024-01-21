//Cookies popup lucas
const elementacacher = document.getElementById('elementacacher');
const buttoncookies = document.getElementById('buttoncookies');

//Ajout de l'écouteur d'évènement
buttoncookies.addEventListener('click', function(){
  //Modification du style de l'élément pour le cacher
  elementacacher.style.display = 'none';
});