const btPlus = document.querySelector('.js-plus');
const conteneurtransport = document.querySelector('.conteneur-transport');
btPlus.addEventListener('click', ouvreferme);

function ouvreferme(){
    conteneurtransport.classList.toggle('conteneur-transport-invisible');
}
