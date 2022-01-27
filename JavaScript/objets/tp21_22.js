class etudiant {
  constructor(nom, prenom, age, genre, pays, option, cours) {
    this.nom = nom;

    this.prenom = prenom;

    this.age = age;

    this.genre = genre;

    this.pays = pays;

    this.option = option;

    this.cours = cours;
  }

  changerNom(nom) {
    this.nom = nom;
  }

  changerPrenom(prenom) {
    this.prenom = prenom;
  }

  changerOption(option) {
    this.option = option;
  }
}

const etudiants = [];
const cours = ["Physique", "Chimie", "Trigonométrie", "Analyse Mathématique"];

const tailleCollection = prompt("nombre d'élève a saisir :");

for (let i = 0; i < tailleCollection; i++) {
  const nom = prompt("Eleve n°" + (i + 1) + " : Nom").toLowerCase();
  const prenom = prompt("Eleve n°" + (i + 1) + " : Prenom").toLowerCase();
  const age = parseInt(prompt("Eleve n°" + (i + 1) + " : Age"));
  const genre = prompt("Eleve n°" + (i + 1) + " : Genre").toLowerCase();
  const pays = prompt("Eleve n°" + (i + 1) + " : Pays").toLowerCase();
  const option = prompt("Eleve n°" + (i + 1) + " : Option").toLowerCase();
  etudiants.push(new etudiant(nom, prenom, age, genre, pays, option, cours));
}

//Q1
let nombreChinois = 0;

for (let etudiant of etudiants) {
  if (etudiant.pays.toLowerCase() === "chine") {
    nombreChinois += 1;
  }
}

// Q2 impérative
const personneAvecNomsTermineParAImperative = [];
for (let etudiant of etudiants) {
  if (etudiant.prenom.endsWith("a")) {
    personneAvecNomsTermineParAImperative.push(etudiant);
  }
}

// Q2 déclarative
const personneAvecNomsTermineParADeclarative = etudiants.filter(function (
  etudiant
) {
  return etudiant.prenom.endsWith("a");
});

// Q3 : imp
const nomsImperative = [];
for (let etudiant of etudiants) {
  nomsImperative.push(etudiant.nom);
}

// Q3 : dec
const nomsDeclarative = etudiants.map(function (etudiant) {
  return etudiant.nom;
});

// Q3 imp
const hommesRussesImperative = [];
for (let etudiant of etudiants) {
  if (etudiant.pays === "russie" && etudiant.genre === "m") {
    hommesRussesImperative.push(etudiant);
  }
}

// Q4
const hommesRussesDeclarative = etudiants.filter(function (etudiant) {
  return etudiant.genre === "m" && etudiant.pays === "russie";
});

// Q4
const femmeAvecNomsCommenceParK = etudiants.filter(function (etudiant) {
  return etudiant.genre === "f" && etudiant.nom.startWith("k");
});

// Q5
const hommes = etudiants.filter(function (etudiant) {
  return etudiant.genre === "m" && etudiant.nom.startWith("m");
});
