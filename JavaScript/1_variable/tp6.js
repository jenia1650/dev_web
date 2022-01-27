let nombre1 = prompt("Entrez un nombre");

while (nombre1 < 1 || nombre1 > 3) {
  alert("mauvais nombre");
  nombre1 = prompt("Entrez un nombre");
}
if (nombre1 >= 1 && nombre1 <= 3) {
  alert("bon resultat");
}
