/*  Introduction aux instructions else : */

/* 
Dans les instructions if else, l'ordre des conditions est important. Les
conditions doivent être placées dans un ordre logique, de sorte que la première
condition qui évalue à true soit exécutée, et les conditions suivantes ne seront pas
évaluées.
*/

var temperature = 22;

if (temperature > 30) {
    console.log("Il fait chaud !");
}else {
    console.log("La température est agréable");
}
// Affiche "Il fait chaud !"

//_____________________________________________________________________________\\

/*  Introduction aux instructions else if : */

/* 
L'enchaînement des instructions if else permet de tester plusieurs conditions
successivement. Chaque condition est évaluée séquentiellement et le bloc de code
correspondant à la première condition qui évalue à true est exécuté.
*/

var score = 92;

if (score > 90) {
    console.log("Excelent travail !");
} else if (score > 70) {
    console.log("Bon travail");
} else if (score > 50) {
    console.log("Travail moyen");;
} else {
    console.log("il faut s'améliorer");
}
// Affiche "Excelent travail !"

//_____________________________________________________________________________\\

/*   Ordre logique dans les instructions if else :  */

/* 
Dans les instructions if else, l'ordre des conditions est important. Les
conditions doivent être placées dans un ordre logique, de sorte que la première
condition qui évalue à true soit exécutée, et les conditions suivantes ne seront pas
évaluées.
*/

var num = 10;
if (num > 3) {
console.log("Le nombre est supérieur à 3.");
} else if (num > 5) {
console.log("Le nombre est supérieur à 5.");
} else {
console.log("Le nombre est inférieur ou égal à 3.");
}
// affiche "Le nombre est supérieur à 3."

//_____________________________________________________________________________\\

/*  Enchaînement des instructions if else : */

/* 
L'enchaînement des instructions if else permet de tester plusieurs conditions
successivement. Chaque condition est évaluée séquentiellement et le bloc de code
correspondant à la première condition qui évalue à true est exécuté.
*/

var age = 29;

if (age < 18) {
    console.log("Mineur");
}else if (age > 65) {
    console.log("Senior");
}else {
    console.log("Majeur");
}
// Affiche Majeur

//_____________________________________________________________________________\\

/* CODE GOLF */

/* 
Le "Code Golf" est un style de programmation qui consiste à écrire le code
le plus court possible pour résoudre un problème donné. Cela met l'accent sur la
concision et l'efficacité du code.
Exemple :
function golfScore(par, strokes) {
if (strokes === 1) {
return "Hole-in-one!";
} else if (strokes <= par - 2) {
30
return "Eagle";
} else if (strokes === par - 1) {
return "Birdie";
} else if (strokes === par) {
return "Par";
} else if (strokes === par + 1) {
return "Bogey";
} else if (strokes === par + 2) {
return "Double Bogey";
} else {
return "Go Home!";
}
}
console.log(golfScore(4, 1)); // Affiche "Hole-in-one!"
console.log(golfScore(4, 2)); // Affiche "Eagle"
console.log(golfScore(4, 3)); // Affiche "Birdie"
console.log(golfScore(4, 4)); // Affiche "Par"
console.log(golfScore(4, 5)); // Affiche "Bogey"
console.log(golfScore(4, 6)); // Affiche "Double Bogey"
console.log(golfScore(4, 7)); // Affiche "Go Home!"
*/

//_____________________________________________________________________________\\

/*  .Sélection parmi de nombreuses options avec les instructions switch : */

/* 
Les instructions switch permettent de sélectionner parmi plusieurs options
en fonction de la valeur d'une expression. Elles fournissent une alternative plus claire
et plus concise que l'utilisation d'une série d'instructions if et else if
*/



function getDayName(name) {
    var dayName;
    switch (name) {
    case "1":
    dayName = "Lundi";
    break;
    case "2":
    dayName = "Mardi";
    break;
    case "3":
    dayName = "Mercredi";
    break;
    case "4":
    dayName = "Jeudi";
    break;
    case "5":
    dayName = "Vendredi";
    break;
    case "6":
    dayName = "Samedi";
    break;
    case "7":
    dayName = "Dimanche";
    break;
    }
    return dayName;
    }
    console.log(getDayName("1")); // Affiche "Lundi"
    console.log(getDayName("2")); // Affiche "Mardi"
    console.log(getDayName("3")); // Affiche "Mercredi"
    console.log(getDayName("4")); // Affiche "Jeudi"
    console.log(getDayName("5")); // Affiche "Vendredi"
    console.log(getDayName("6")); // Affiche "Samedi"
    console.log(getDayName("7")); // Affiche "Dimanche"

//_____________________________________________________________________________\\


/* Ajouter une option par défaut dans les instructions switch : */

/* 
L'ajout d'une option par défaut dans une instruction switch permet de définir
un comportement par défaut à exécuter lorsque la valeur ne correspond à aucune des
options spécifiées.
*/

var grade;
function getGrade(score) {
    switch (score) {
        case 90:
            grade = "A";
            break;
        case 80:
            grade = "B";
            break;
        case 70:
            grade = "C";
            break;
        case 60:
            grade = "D";
            break;
        default:
            grade = "F"
    }
    return grade;
}
console.log(getGrade(90)); // Affiche A
console.log(getGrade(80)); // Affiche B
console.log(getGrade(70)); // Affiche C
console.log(getGrade(60)); // Affiche D
console.log(getGrade());   // Affiche F

//_____________________________________________________________________________\\



/*    Options identiques multiples dans les instructions switch :  */

/* 
Dans une instruction switch, vous pouvez spécifier plusieurs options
identiques qui auront le même comportement lorsqu'elles sont évaluées.
*/

function getCategory(item) {
    var categoryItem;
    switch (item) {
    case "A":
    case "B":
    categoryItem = "Alimentaire";
    break;
    case "C":
    categoryItem = "Vêtements";
    break;
    case "D":
    case "E":
    categoryItem = "Électronique";
    break;
    default:
    categoryItem = "Inconnu";
    }
    return categoryItem;
    }
    console.log(getCategory("A")); // Affiche Alimentaire
    console.log(getCategory("B")); // Affiche Alimentaire
    console.log(getCategory("C")); // Affiche Vêtements
    console.log(getCategory("D")); // Affiche Electronique
    console.log(getCategory("E")); // Affiche Electronique
    console.log(getCategory("F")); // Affiche Inconnu

//_____________________________________________________________________________\\

/*   Remplacer les chaînes de conditions if-else par une instruction switch :  */

/* 
Lorsque vous avez une série de conditions if-else basées sur la même
variable, vous pouvez les remplacer par une instruction switch pour rendre votre code
plus clair et plus concis.
*/

function getMonthName(nom) {
    var Month;
    switch (nom) {
    case "1":
    Month = "Janvier";
    break;
    case "2":
    Month = "Février";
    break;
    case "3":
    Month = "Mars";
    break;
    case "4":
    Month = "Avril";
    break;
    case "5":
    Month = "Mai";
    break;
    case "6":
    Month = "Juin!";
    break;
    case "7":
    Month = "Juillet";
    break;
    case "8":
    Month = "Août";
    break;
    case "9":
    Month = "Septembre";
    break;
    case "10":
    Month = "Octobre";
    break;
    case "11":
    Month = "Novembre";
    break;
    case "12":
    Month = "Décembre";
    break;
    default:
    Month = "Je ne connais pas ce mois.";
    }
    return Month;
    }
    console.log(getMonthName("1")); // Affiche Janvier
    console.log(getMonthName("7")); // Affiche Juillet
    console.log(getMonthName("12")); // Affiche Décembre
    console.log(getMonthName("13")); // Affiche "Je ne connais pas ce mois."

//_____________________________________________________________________________\\
//_____________________________________________________________________________\\

/*   Retourner des valeurs booléennes à partir de fonctions : */

/*    
Les fonctions peuvent également retourner des valeurs booléennes, c'est-à-
dire des valeurs true ou false, en fonction du résultat de leurs calculs ou de leurs
conditions.
*/

function isLeapYear(year) {
    if ( year % 100 !== 0 && year % 400 === 0) {
        return false
    }
    else if ( year % 4 === 0 ) {
        return true;
    }
    
    else {
        return false
    }

    }
    console.log(isLeapYear(2000)); // Affiche true
    console.log(isLeapYear(2014)); // Affiche false
    console.log(isLeapYear(2018)); // Affiche false

//_____________________________________________________________________________\\

/*   Modèle de retour anticipé pour les fonctions :  */

/* 
Les fonctions peuvent utiliser un modèle de retour anticipé pour interrompre
l'exécution du reste du code et renvoyer une valeur avant d'atteindre la fin de la
fonction. Cela peut être utile dans certains cas où une condition spécifique est vérifiée
et que vous voulez sortir de la fonction prématurément.
*/

function isAdult(age) {
    if (age > 18) {
    return true;
    }
    return false;
    }
    console.log(isAdult(29)); // Affiche true
    console.log(isAdult(17)); // Affiche false

//_____________________________________________________________________________\\

/* Compter les cartes : */

/* 
Le comptage des cartes est une technique utilisée au blackjack pour
déterminer si le prochain jeu de cartes sera avantageux pour le joueur ou pour le
croupier. Dans sa forme la plus simple, le comptage des cartes attribue une valeur aux
cartes et maintient un total en fonction des cartes qui sont tirées du jeu.
*/

var count = 0;
function cardCount(card) {
switch (card) {
case 2:
case 3:
case 4:
case 5:
case 6:
count++;
break;
case 10:
case "J":
case "Q":
case "K":
case "A":
count--;
break;
}
return count <= 0 ? "0 Hold" : "1 Bet";
}

console.log(cardCount(2));   // Affiche "1 Bet"
console.log(cardCount(7));   // Affiche "1 Bet"
console.log(cardCount("K")); // Affiche "0 Hold"
console.log(cardCount("A")); // Affiche "0 Hold"
console.log(cardCount(4));   // Affiche "0 Hold"

//_____________________________________________________________________________\\

/*   Créer, modifier, ajouter, supprimer des objets JavaScript :  */

/* 
Les objets JavaScript sont des structures de données utilisées pour stocker
des collections de propriétés. Les propriétés sont des paires clé-valeur, où la clé est
une chaîne de caractères (ou un symbole) et la valeur peut être de n'importe quel type
de données.
*/

var student = {
    name: "Julien",
    age: 29,
    major: "Developpeur Web",
    book: { // création d'un objet book qui contient des information
        title: "123 Main St",
        author: "Julien",
        year: "2023",
        publisher:"Popschool"
    },
    note: [15, 12, 17] // création d'un objet note
    };

    console.log(student.name); // Affiche "Julien"
    console.log(student.age); // Affiche 30
    console.log(student.major); // Affiche "Developpeur Web"
    console.log(student["name"]); // Affiche "Julien"
    console.log(student["age"]); // Affiche 30
    console.log(student["major"]); // Affiche "Developpeur Web"

var propertyMajor = "major"; // Création d'une nouvelle variable 
student.major = "Développeur Web Mobile" // MàJ de la variable major

    console.log(student[propertyMajor]); // Affiche "Developpeur Web Mobile"

student.grade = "developer" // Ajout de la propriété grade

    console.log(student); // grade a été ajouté
    console.log(student.grade); // Affiche "developer"

delete student.major; // suppression de la propriété major de l'objet student

    console.log(student.major); // Affiche undefined

// Utilisez l'opérateur in ou la méthode hasOwnProperty() pour vérifier si l'objet
// student contient les propriétés suivantes : "name", "age", " major", "grade".

    console.log(student.hasOwnProperty("name")); // Affiche true
    console.log(student.hasOwnProperty("age")); // Affiche true
    console.log(student.hasOwnProperty("major")); // Affiche false
    console.log(student.hasOwnProperty("grade")); // Affiche true

// vérification des objets présent dans book

    console.log(student.book.title); // Affiche "123 Main St"
    console.log(student.book.author); // Affiche "Julien"
    console.log(student["book"]["year"]); // Affiche "2023"
    console.log(student["book"]["publisher"]); // Affiche "Popschool"

// création d'un objet note et recherche de la 2éme note.

    console.log(student.note[1]);



//_____________________________________________________________________________\\

/*   Utilisation d'objets pour des recherches : */

/* 
Les objets JavaScript peuvent être utilisés comme des tableaux associatifs,
où les propriétés sont utilisées comme des clés pour accéder à des valeurs
spécifiques. Cela peut être utile pour effectuer des recherches ou des
correspondances basées sur des clés spécifiques.
*/


var prices = {
    apple: 1.99,
    banana: 0.99,
    orange: 2.49,
  };
  
  function getProductPrice(productName) {
    if (productName in prices) { // opérateur in pour vérifier si la variable productName est une clé présente dans l'objet prices.
      return prices[productName]; // renvoie le prix correspondant à la clé 
    } else {
      return "Produit non trouvé";
    }
  }
  
  // Appel de la fonction getProductPrice avec différents produits
  console.log(getProductPrice("apple"));   // Résultat attendu: 1.99
  console.log(getProductPrice("banana"));  // Résultat attendu: 0.99
  console.log(getProductPrice("orange"));  // Résultat attendu: 2.49
  console.log(getProductPrice("grape"));   // Résultat attendu: Produit non trouvé


//_____________________________________________________________________________\\

/*  Accéder à des tableaux imbriqués :  */

/* Les tableaux en JavaScript peuvent également contenir d'autres tableaux.
Pour accéder aux éléments des tableaux imbriqués, on peut utiliser la notation par
index. */

/* 
Créez un tableau students qui contient deux tableaux. Chaque tableau
représente les notes d'un étudiant. Accédez à la deuxième note du premier étudiant et
affichez-la dans la console.
*/

var students = [
    [15, 12, 13],
    [14, 15, 16]
    ];
    console.log(students[0][1]); // Affiche la deuxième note du premier étudiant

//_____________________________________________________________________________\\

var collections = {
    1456:{
        nom: "Clement",
        grade: 19,
    },
    1234:{
        nom: "Julien",
        grade: 15,
    }
}

// recherche de la note du premier étudiant
console.log(collections[1456].grade); // Affiche 19

//_____________________________________________________________________________\\

/*   Itération avec la boucle while : */

/* 
La boucle while est une structure de contrôle qui répète un bloc de code tant
qu'une condition spécifiée est évaluée à true. La condition est vérifiée avant chaque
itération. Si la condition est évaluée à false dès le départ, le bloc de code ne sera
jamais exécuté.
*/

//À l'aide d'une boucle while, affichez les nombres de 1 à 5 dans la console
var i = 0;
while (i < 5) {
i++;
console.log(i);
}

//_____________________________________________________________________________\\

/*  Itération avec la boucle for :  */

/* 
La boucle for est une autre structure de contrôle utilisée pour répéter un bloc
de code un nombre spécifique de fois. Elle est souvent utilisée lorsque le nombre
d'itérations est connu à l'avance. La boucle for est composée de trois parties :
l'initialisation, la condition et l'incrémentation.
*/

// À l'aide d'une boucle for, affichez les nombres de 1 à 5 dans la console.

for (var i = 0; i < 6; i++) {
    console.log(i);
    }

//_____________________________________________________________________________\\

/*   Itération avec des nombres impairs à l'aide d'une boucle for : */

/* 
En utilisant une boucle for, il est possible d'itérer uniquement sur des
nombres impairs en sautant une certaine valeur à chaque itération.
*/

// À l'aide d'une boucle for, affichez les nombres impairs de 1 à 10 dans la console.

for (var i = 1; i <= 10; i += 2) {
    console.log(i);
    }

//_____________________________________________________________________________\\

/*   Compter en sens inverse avec une boucle for :  */

/* 
En utilisant une boucle for, il est possible de compter en sens inverse en
diminuant la valeur de l'index à chaque itération.
*/

//  À l'aide d'une boucle for, affichez les nombres de 5 à 1 dans la console.

for (var i = 5; i >= 1; i--) {
    console.log(i);
    }

//_____________________________________________________________________________\\

/*    Itération à travers un tableau avec une boucle for : */

/* 
Une boucle for peut également être utilisée pour itérer à travers les éléments
d'un tableau en utilisant la propriété length du tableau.
*/

var colors = ["rouge", "noir", "jaune"];
for (var i = 0; i < colors.length; i++) {
console.log(colors[i]);
}

//_____________________________________________________________________________\\

/*    Imbrication de boucles for : */

/*
 Les boucles for peuvent être imbriquées les unes dans les autres pour itérer
à travers des structures de données complexes, telles que des tableaux
multidimensionnels.
*/

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
    for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
    }
    }

//_____________________________________________________________________________\\

/*    Itération avec la boucle do...while : */

/* 
La boucle do...while est similaire à la boucle while, mais elle vérifie la
condition à la fin de chaque itération. Cela signifie que le bloc de code est exécuté au
moins une fois, même si la condition initiale est évaluée à false.
*/

/*    À l'aide d'une boucle do...while, affichez les nombres de 1 à 5 dans la console. */

var i = 0;
do {
console.log(i);
i++;
} while (i < 6);


//_____________________________________________________________________________\\

/*    Remplacement des boucles par récursivité : */

/* 
En JavaScript, il est possible de remplacer certaines boucles par des
fonctions récursives, c'est-à-dire des fonctions qui s'appellent elles-mêmes.
*/

// Écrivez une fonction récursive appelée factorial qui prend un nombre entier
// n en paramètre et renvoie la factorielle de ce nombre. La factorielle de n est le produit
// de tous les entiers positifs inférieurs ou égaux à n.

function factoriel(n) {
    var i, n, f = 1;
    for(i = 1; i <= n; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }
    console.log(factoriel(5));

    function countDown(n) {
        if (n > 0) {
        console.log(n);
        console.log("terminé");
        countDown(n - 1);
        }
        }
        countDown(5);

//_____________________________________________________________________________\\

/*   Recherche de profil : */

/* 
La recherche de profil consiste à accéder aux propriétés d'un objet en
fonction de certaines conditions. Cela peut être réalisé en utilisant des instructions
if...else et des opérations de comparaison.
*/

/* 
Créez un tableau students contenant plusieurs objets représentant des
étudiants. Chaque étudiant doit avoir les propriétés name (nom) et grade (note).
Écrivez une fonction findStudent qui prend le nom d'un étudiant en paramètre et
renvoie sa note. Si l'étudiant n'est pas trouvé, la fonction doit renvoyer "Étudiant
introuvable".
*/

var students = [
    {
    nom: "John",
    note: 12,
    },
    {
    nom: "Jane",
    note: 15,
    },
    {
    nom: "Bob",
    note: 17,
    }
    ];
    function lookupProfile(name, prop) {
    for (var i = 0; i < students.length; i++) {
    if (students[i].nom === name) {
    return students[i][prop] || "Propriété introuvable";
    }
    }
    return "Etudiant introuvable";
    }
    console.log(lookupProfile("John", "note")); // Affiche 12
    console.log(lookupProfile("Jason", "note")); // Affiche Etudiant introuvable


//_____________________________________________________________________________\\

/*   Génération de fractions aléatoires avec JavaScript :  */

/* 
En utilisant la fonction Math.random() de JavaScript, il est possible de
générer des fractions aléatoires entre 0 (inclus) et 1 (exclus).
*/

/* 
À l'aide de la fonction Math.random(), générez une fraction aléatoire entre
0 (inclus) et 1 (exclus) et affichez-la dans la console.
*/

var randomFraction = Math.random(0, 1);
console.log(randomFraction);

//_____________________________________________________________________________\\

/*   Génération de nombres entiers aléatoires avec JavaScript :  */

/* 
En utilisant la fonction Math.random() et en appliquant des opérations
mathématiques appropriées, il est possible de générer des nombres entiers aléatoires
dans une plage spécifique.
*/

//  À l'aide de la fonction Math.random(), générez un nombre entier aléatoire
// entre 1 et 100 (inclus) et affichez-le dans la console.

var randomInteger = Math.floor(Math.random() * 100) + 1;
console.log(randomInteger);

//_____________________________________________________________________________\\

/*   Génération de nombres entiers aléatoires dans une plage spécifique : */

/* 
En utilisant la fonction Math.random() et en appliquant des opérations
mathématiques appropriées, il est possible de générer des nombres entiers aléatoires
dans une plage spécifique.
*/

// Écrivez une fonction randomRange qui prend deux nombres min et max en
// paramètres et renvoie un nombre entier aléatoire compris entre min et max (inclus).

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(randomRange(5, 10));

//_____________________________________________________________________________\\

/*   Utilisation de la fonction parseInt : */

/* 
La fonction parseInt en JavaScript est utilisée pour analyser une chaîne de
caractères et renvoyer un entier.
*/

// À l'aide de la fonction parseInt, convertissez la chaîne de caractères "42"
// en un nombre entier et affichez-le dans la console.

var number = parseInt("42");
console.log(number);

//_____________________________________________________________________________\\

/*   Utilisation de la fonction parseInt avec une base de conversion :  */

/* 
La fonction parseInt en JavaScript peut également prendre un deuxième
argument qui spécifie la base de conversion.
*/

// À l'aide de la fonction parseInt, convertissez la chaîne de caractères "FF"
// en un nombre entier en utilisant une base de conversion de 16 et affichez-le dans la
// console.

var number = parseInt("FF", 16);
console.log(number);