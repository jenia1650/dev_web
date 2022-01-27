let nombre1 = prompt("Entrez un nombre");

while (nombre1 < 10 || nombre1 > 20) {
  if (nombre1 > 20) {
    alert("Plus petit");
    nombre1 = prompt("Entrez un nombre");
  } else if (nombre1 < 10) {
    alert("Plus grand");
    nombre1 = prompt("Entrez un nombre");
  }
}
if (nombre1>=10 && nombre1<=20) {
    alert("Bon nombre")
    
}
