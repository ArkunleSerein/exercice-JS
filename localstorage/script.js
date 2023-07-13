// Fonction pour ajouter une information au localStorage


function ajouterInfo() {
    var info = document.getElementById("info").value;
    if (info) {
    var infos = localStorage.getItem("infos");
    if (infos) {
    infos = JSON.parse(infos);
    infos.push(info);
    } else {
    infos = [info];
    }
    localStorage.setItem("infos", JSON.stringify(infos));
    document.getElementById("info").value = "";
    // Afficher une alerte pour confirmer la création de l'information
    alert("L'information a été créée avec succès !");
    } else {
    // Afficher une alerte pour informer l'utilisateur qu'il n'a rien indiqué
    alert("Veuillez saisir une information !");
    }
    }

    // Fonction pour afficher les informations sur la page d'accueil

    function afficherInfos() {
    var infos = localStorage.getItem("infos");
    if (infos) {
    infos = JSON.parse(infos);
    var infosDiv = document.getElementById("infos");
    infosDiv.innerHTML = "";
    for (var i = 0; i < infos.length; i++) {
    var info = document.createElement("p");
    info.textContent = infos[i];
    infosDiv.appendChild(info);
    }
    }
    }
    // Appel de la fonction afficherInfos() lorsque la page d'accueil est chargée

window.onload = afficherInfos;

