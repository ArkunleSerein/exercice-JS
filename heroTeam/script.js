// Fonction pour ajouter une information au localStorage
function ajouterInfo() {
    var nom = document.getElementById("nom").value;
    var vie = document.getElementById("vie").value;
    var attaque = document.getElementById("attaque").value;
    var defense = document.getElementById("defense").value;
    var niveau = document.getElementById("niveau").value;
    var team = document.getElementById("team").value;

    if (nom && vie && attaque && defense && niveau) {
        var hero = {
            nom: nom,
            vie: vie,
            attaque: attaque,
            defense: defense,
            niveau: niveau,
            team: team
        };

        var infos = localStorage.getItem("infos");
        if (infos) {
            infos = JSON.parse(infos);
            infos.push(hero);
        } else {
            infos = [hero];
        }

        localStorage.setItem("infos", JSON.stringify(infos));

        document.getElementById("nom").value = "";
        document.getElementById("vie").value = "";
        document.getElementById("attaque").value = "";
        document.getElementById("defense").value = "";
        document.getElementById("niveau").value = "";
        document.getElementById("team").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
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
            var hero = infos[i];
            var heroElement = document.createElement("div");
            heroElement.classList.add("hero");
            heroElement.innerHTML = `
                <h3>${hero.nom}</h3>
                <p>Vie: ${hero.vie}</p>
                <p>Attaque: ${hero.attaque}</p>
                <p>Défense: ${hero.defense}</p>
                <p>Niveau: ${hero.niveau}</p>
                <p>Team: ${hero.team}</p>
                <button onclick="supprimerInfo(${i})">Supprimer</button>
            `;
            infosDiv.appendChild(heroElement);
        }
    }
}

// Appel de la fonction afficherInfos() lorsque la page d'accueil est chargée
window.onload = afficherInfos();

// Fonction pour supprimer une information
function supprimerInfo(index) {
    var infos = localStorage.getItem("infos");
    if (infos) {
        infos = JSON.parse(infos);
        infos.splice(index, 1);
        localStorage.setItem("infos", JSON.stringify(infos));
        afficherInfos();
    }
}