function changeAllColor(event) {
    let red =  Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let rgb = `rgb(${red},${green},${blue})`;

    let colorbody = document.querySelector("body");
    colorbody.style.backgroundColor =  rgb;
    let colorfacts = document.querySelector("#facts");
    colorfacts.style.backgroundColor = rgb;
    let colorbychuck =  document.querySelector("#byChuck");
    colorbychuck.style.backgroundColor = rgb;
    let colorbtnfacts = document.querySelector("#btnfacts");
    colorbtnfacts.style.backgroundColor = rgb;
    colorbtnfacts.style.borderColor = rgb;

    let selectfact = facts[Math.floor(Math.random() * (facts.length))];

    let facted = document.querySelector("#facts");
    facted.innerHTML = "<span>&#8220;</span>" + selectfact;
    
}

let facts = [
    "Chuck Norris comprends les textes de Magic System",
    "L'avenir se demande parfois ce que Chuck Norris lui réserve",
    "Chuck Norris ne sait pas à quoi ressemble Nicolas Sarkozy, en effet Chuck Norris ne baisse jamais les yeux.",
    "Un jour, les PowerRangers ont rencontré Chuck Norris. Maintenant on les appelle les Télétubbies.",
    "Si Chuck Norris avait joué dans 'il faut sauver le soldat Ryan', le film se serait appelé 'il faut sauver l'armée allemande'.",
    "Quand Chuck Norris joue à Resident Evil, ce sont les zombies qui doivent survivre...",
    "Quand Chuck Norris fait du ski tout nu, il laisse 3 traces dans la neige.",
    "Chuck Norris traverse le terrain d'Olive et Tom en moins d'un épisode",
    "Chuck Norris a planté son ordinateur. Et il a fleuri.",
    "Si Mickey a quatre doigts, c'est parce qu'il a fait un doigt d'honneur à Chuck Norris."
];

let body = document.body;

let newtfacts = document.querySelector("#btnfacts");
newtfacts.addEventListener("click",changeAllColor);
