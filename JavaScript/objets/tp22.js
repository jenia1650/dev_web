class Etudiant {
  constructor(nom, prenom, age, genre, option, pays, cours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.option = option;
    this.pays = pays;
    this.cours = cours;
  }
  modifyNom(arr) {
    this.nom = arr;
  }
  modifyPrenom(arr) {
    this.prenom = arr;
  }
  modifyOption(arr) {
    this.option = arr;
  }
}

const etudiants = [];

function enregisterEtudiant() {
  let nom1 = prompt("nom");
  let prenom1 = prompt("prenom");
  let age1 = prompt("age");
  let genre1 = prompt("genre");
  let option1 = prompt("option");
  let pays1 = prompt("pays");
  let liste1 = prompt("liste");

  etudiants.push(
    new Etudiant(nom1, prenom1, age1, genre1, option1, pays1, liste1)
  );
}

let count = 0;
let noms = [];
const listRusseHomme = [];
const listNomsK = [];
const listNomsA = [];
const listNomsM = [];

function finder() {
  for (let i = 0; i < etudiants.length; i++) {
    if (etudiants[i].pays == "chine" && etudiants[i].genre == "f") {
      count += 1;
    }
    noms.push(etudiants[i].nom);
    if (etudiants[i].genre == "m" && etudiants[i].pays == "russie") {
      listRusseHomme.push(etudiants[i]);
    }
    let nom_etudiant = etudiants[i].nom;
    if (nom_etudiant[0] === "K" && etudiants[i].genre == "f") {
      listNomsK.push(etudiants[i]);
    }
    let prenom_etudiant = etudiants[i].prenom;
    if (prenom_etudiant[nom_etudiant.length - 1] === "a") {
      listNomsA.push(etudiants[i]);
    }
    let nom_etudiant = etudiants[i].nom;
    if (nom_etudiant[0] === "M" && etudiants[i].genre == "m") {
      listNomsM.push(etudiants[i]);
    }
  }
  console.log(`nombre femme chinoises : ${count}`);
  console.log(`liste tous les nom : ${noms}`);
  console.log(listRusseHomme);
  console.log(listNomsK);
  console.log(listNomsA);
  console.log(listNomsM);
}
