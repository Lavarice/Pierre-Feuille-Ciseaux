let choix = document.getElementById('choix');
let btnPierre = document.getElementById('p');
let btnFeuille = document.getElementById('f');
let btnCiseau = document.getElementById('c');
let choixOrdi = document.getElementById('choixOrdi');
let ordinateur = document.getElementById('win');
const choixPlayer = ["Pierre","Feuille","Ciseaux"];
let rollBack = document.getElementById('picture');

function computer(){
    randomChoice = Math.floor(Math.random() * choixPlayer.length);
    return(choixPlayer[randomChoice]);
}

let valOrdi = computer();

function game(moi, valOrdi){

    let message;

    switch(moi + '_' + valOrdi){
        case "Pierre_Ciseaux":
        case "Feuille_Pierre":
        case "Ciseaux_Feuille":
            message = `J'ai choisi ${moi}, l'ordinateur a choisi ${valOrdi}. 😎​​ Je suis trop fort! 😎​`;
            break;

        case "Pierre_Feuille":
        case "Feuille_Ciseaux":
        case "Ciseaux_Pierre":  
            message = `J'ai choisi ${moi}, l'ordinateur a choisi ${valOrdi}. 😭​ T'es NULLLL Mitroglou! 😭​`;
            break;
        
        case "Pierre_Pierre":
        case "Feuille_Feuille":
        case "Ciseaux_Ciseaux":
            message = `J'ai choisi ${moi}, l'ordinateur a choisi ${valOrdi}. 🤝 C'est une égalité. 🤝`;
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
    choix.innerText = 'Pierre';
    let valOrdi = computer();
    choixOrdi.textContent = valOrdi;
    game("Pierre",valOrdi)
    
});

btnFeuille.addEventListener('click', () => {
    choix.innerText = 'Feuille'
    let valOrdi = computer();
    choixOrdi.textContent = valOrdi;
    game("Feuille", valOrdi)
});

btnCiseau.addEventListener('click', () => {
    choix.innerText = 'Ciseaux';
    let valOrdi = computer()
    choixOrdi.textContent = valOrdi;
    game("Ciseaux", valOrdi);
});
