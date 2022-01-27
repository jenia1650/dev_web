class Etudiant {
  constructor(nom, prenom, age, genre, pays, option, cours) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.genre = genre;
    this.pays = pays;
    this.option = option;
    this.cours = cours;
  }
  modifyNom(arr) {
    return (this.nom = arr);
  }
  modifyPrenom(arr) {
    return (this.prenom = arr);
  }
  modifyOption(arr) {
    return (this.option = arr);
  }
}

const philipe = new Etudiant(
  "dupont",
  "philipe",
  50,
  "m",
  "france",
  "informatique",
  ["math", "algo", "web"]
);
