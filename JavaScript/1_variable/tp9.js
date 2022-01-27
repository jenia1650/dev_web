let nombre1 = parseFloat(prompt("Entrez un nombre"));

for (let i = 0; i <= nombre1; i++) {
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(i);
  }
  if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzbuzz");
  }
}
