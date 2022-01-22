const email = prompt("Entrez email");
const motdepasse = prompt("Entrez mot de passe");
const email1 = prompt("Entrez encore une fois email");
const motdepasse1 = prompt("Entrez encore une fois motdepasse");

if (email != email1 || motdepasse != motdepasse1) {
  alert("Email et mot de passe sont incorrects reessayez");
} else {
  alert("Bienvenu dans votre espace client");
}
