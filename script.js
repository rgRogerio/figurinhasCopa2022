let isIgnite = true
/*
function changeCard(event){

const card = event.currentTarget
//lógica se for Ignite troca para explore, se não troca para ignite.
const backgroundImage = isIgnite
    ? "url(./assets/bg-explorer.svg)"
    : "url(./assets/bg-ignite.svg"

isIgnite = !isIgnite

card.style.backgroundImage = backgroundImage
}
*/
//Outra forma mais simples de fazer:

function changeCard(event){
    const card = event.currentTarget
    const bg = isIgnite
    ? "explorer"
    : "ignite"
    isIgnite = !isIgnite
    card.style.backgroundImage = `url(./assets/bg-${bg}.svg)`

}
 