// Utilisation

let name = "Christian Lisangola";
name = name.toLowerCase();

//for (let i = 0; i < name.length; i++) {
// console.log(`${i} => ${name[i]}`); //name[0]
//}
var voyelles = "";
var consonnes = "";

for (let i = 0; i < name.length; i++) {
  if (name[i] == " ") {
    continue;
  }
  if (
    name[i] == "a" ||
    name[i] == "e" ||
    name[i] == "i" ||
    name[i] == "o" ||
    name[i] == "y" ||
    name[i] == "u"
  ) {
    voyelles = voyelles + name[i];
  } else {
    consonnes = consonnes + name[i];
  }
}
console.log("voyelles :" + voyelles);
console.log("consonnes :" + consonnes);
