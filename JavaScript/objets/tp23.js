const rayon = document.querySelector("#rayon");
const diametre = document.querySelector("#diametre");
const circonference = document.querySelector("#circonference");
const aire = document.querySelector("#aire");
const btnSubmit = document.querySelector("#btnSubmit");

// Err fields
const errRayon = document.querySelector("#err_rayon");

// table list

btnSubmit.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log("rayon : ", rayon.value);
  console.log("diametre : ", diametre.value);
  console.log("circonference : ", circonference.value);

  if (rayon.value === "") {
    errRayon.innerText = "Veuillez saisir le rayon";
    errRayon.classList.add("err");
  } else {
    errRayon.innerText = "";
    errRayon.classList.remove("err");
  }

  if (rayon.value !== "") {
    // listeUtilisateurs.innerHTML += `<tr><td>${nom.value}</td><td>${prenom.value}</td><td>${email.value}</td></tr>`;
    diametre.value = 2 * rayon.value;
    circonference.value = 2 * 3.14 * rayon.value;
    aire.value = 3.14 * rayon.value * rayon.value;
  }
}
