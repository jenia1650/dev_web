const email = prompt("Entrez email");
const motdepasse = prompt("Entrez mot de passe");
let email1 = prompt("Entrez encore une fois email");
let motdepasse1 = prompt("Entrez encore une fois motdepasse");
let i = 0;

while ((email != email1 || motdepasse != motdepasse1) && i < 5) {
  alert("Email et mot de passe sont incorrects reessayez");
  email1 = prompt("Entrez encore une fois email");
  motdepasse1 = prompt("Entrez encore une fois motdepasse");
  i=i+1;

if (i === 5) {
  alert(
    "Vous avez saisi des mauvais identifiants 5 fois, votre compte est bloqué”"
  );
  break
}
} 
 if (email === email1 || motdepasse === motdepasse1) {
  alert("Bienvenu dans votre espace client");
}
