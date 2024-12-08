let choix = document.getElementById('choix');
let btnPierre = document.getElementById('p');
let btnFeuille = document.getElementById('f');
let btnCiseau = document.getElementById('c');
let choixOrdi = document.getElementById('choixOrdi');
let ordinateur = document.getElementById('win');
const choixPlayer= ["Pierre","Feuille","Ciseaux"];
let rollBack = document.getElementById('picture');




function computer(){
    randomChoice = Math.floor(Math.random() * choixPlayer.length);
    return(choixPlayer[randomChoice]);
}


const cap = computer();

function game(moi){

    let message;

    switch(moi + '_' +cap){
        case "Pierre_Ciseaux":
        case "Feuille_Pierre":
        case "Ciseaux_Feuille":
            message = `Vous avez choisi ${moi}, l'ordinateur a choisi ${cap}. 🏆 Vous gagnez !`;
            break;

        case "Pierre_Feuille":
        case "Feuille_Ciseaux":
        case "Ciseaux_Pierre":
            message = `Vous avez choisi ${moi}, l'ordinateur a choisi ${cap}. 😢 Vous perdez !`;
            break;
        
        case "Pierre_Pierre":
        case "Feuille_Feuille":
        case "Ciseaux_Ciseaux":
            message = `Vous avez choisi ${moi}, l'ordinateur a choisi ${cap}. 🤝 C'est une égalité.`;
            break;
    }
    ordinateur.innerText  = message;
}

function reset(){
    ordinateur.innerText ='';
    choix.innerText = '';  
    choixOrdi.innerText ='';
}

rollBack.addEventListener('click', () =>{
    reset();
});

btnPierre.addEventListener('click', () => {
    choix.innerText = 'Pierre'
    choixOrdi.textContent = `${cap}`;
    game("Pierre")
});

btnFeuille.addEventListener('click', () => {
    choix.innerText = 'Feuille'
    choixOrdi.textContent = `${cap}`;
    game("Feuille")
});

btnCiseau.addEventListener('click', () => {
    choix.innerText = 'Ciseaux';
    choixOrdi.textContent = `${cap}`;
    game("Ciseaux");
});
