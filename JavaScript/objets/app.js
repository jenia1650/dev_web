const article = {
  designation: "T-shirt",
  reference: "xabsx",
  prixHT: 15,
  calculerPrixTTC: function () {
    return this.prixHT + this.prixHT * 0.16;
  },
};

// papaEtMaman//camel case
// PapaEtMaman//Pascal case
// papa_et_maman // snake case ou underscore case
// papa-et-maman//kebab case
// VALEUR_PI

function Article(reference, designation, prixHT) {
  this.reference = reference;
  this.designation = designation;
  this.prixHT = prixHT;
  // this.calculerPrixTTC = function () {
  //     return this.prixHT + this.prixHT * 0.16
  // }
}

Article.prototype.calculerPrixTTC = function () {
  return this.prixHT + this.prixHT * 0.16;
};

const tShirt = new Article("xy123", "T-shirt zozo", 67);
//1 : { }
// 2 :

class Article2 {
  constructor(reference, designation, prixHT) {
    this.reference = reference;
    this.designation = designation;
    this.prixHT = prixHT;
  }

  calculerPrixTTC() {
    return this.prixHT + this.prixHT * 0.16;
  }
}

const laptop = new Article2("abcxxx", "Asus TUF Gaming", 1600);
