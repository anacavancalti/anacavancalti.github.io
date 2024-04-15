function getName() {
  let name = prompt("Hoe heet je?");
  if (name != null && name != "") {
    document.getElementById("welkom").innerHTML = "Hoi, " + name + "!";
  } else {
    document.getElementById("welkom").innerHTML = "Welkom!";
  }
}

getName();
