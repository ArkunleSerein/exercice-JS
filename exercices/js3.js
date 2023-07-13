/* 100. Utilisation de l'opérateur conditionnel (ternaire) : */

/* 
L'opérateur conditionnel (ternaire) en JavaScript permet d'écrire une
instruction conditionnelle de manière plus concise.
*/

// À l'aide de l'opérateur conditionnel, créez une variable result qui contient le
// message "Passé" si une variable score est supérieure ou égale à 10, et "Échec" sinon.
// Affichez result dans la console.

var score = 6;
var result = (score >= 10) ? "Passé" : "Echec";
console.log(result);

//_____________________________________________________________________________\\

/*   Utilisation de plusieurs opérateurs conditionnels (ternaires) : */

/*  
Il est possible d'utiliser plusieurs opérateurs conditionnels (ternaires) en
cascade pour effectuer des tests conditionnels multiples.
*/

// Exercice : À l'aide de plusieurs opérateurs conditionnels, créez une variable grade qui
// contient la lettre correspondant à une note en fonction des critères suivants :
// Si score est supérieur ou égal à 90, la lettre est "A".
// Si score est supérieur ou égal à 80, la lettre est "B".
// Si score est supérieur ou égal à 70, la lettre est "C".
// Si score est supérieur ou égal à 60, la lettre est "D".
// Sinon, la lettre est "F". Affichez grade dans la console.

var grade = 75;
var result = (grade >= 90) ? "A" : (grade >= 80) ? "B" : (grade >= 70) ? "C" :
(grade >= 60) ? "D" : "F";
console.log(result);

//_____________________________________________________________________________\\

/*   Comparaison d'objets avec l'opérateur strict d'égalité : */

/*  En JavaScript, l'opérateur strict d'égalité (===) est utilisé pour comparer des
objets en vérifiant si les références des objets sont identiques.*/

// Créez deux objets person1 et person2 contenant les propriétés name et
// age. Comparez ces deux objets en utilisant l'opérateur strict d'égalité et affichez le
// résultat dans la console.

var person1 = { name: "John", age: "30" };
var person2 = { name: "bob", age: "30" };
console.log(person1 === person2); // false

//_____________________________________________________________________________\\

/*    Comparaison d'objets avec l'opérateur d'égalité : */

/* 
En JavaScript, l'opérateur d'égalité (==) est utilisé pour comparer des objets
en vérifiant si les valeurs des propriétés des objets sont égales.
*/

// Créez deux objets book1 et book2 contenant les propriétés title et author.
// Comparez ces deux objets en utilisant l'opérateur d'égalité et affichez le résultat dans
// la console.

var book1 = { title: "John" };
var book2 = { author: "John" };
console.log(book1 == book2); // false

//_____________________________________________________________________________\\

/*   Utilisation de l'opérateur logique NOT : */

/* 
L'opérateur logique NOT (!) inverse la valeur d'une expression booléenne. Si
l'expression est true, l'opérateur NOT renvoie false, et si l'expression est false,
l'opérateur NOT renvoie true.
*/

// Déclarez une variable isOn et assignez-lui une valeur booléenne. Utilisez
// l'opérateur NOT pour inverser la valeur de isOn et affichez la nouvelle valeur dans la
// console.

var isOn = false;
var isLoggedIn = !isOn;
console.log(isLoggedIn); // true

//_____________________________________________________________________________\\

/*    Utilisation de l'opérateur logique AND : */

/* 
L'opérateur logique AND (&&) effectue une opération logique ET entre deux
expressions booléennes. Il renvoie true uniquement si les deux expressions sont true,
sinon il renvoie false.
*/

var isEmailVerified = true;
var isPaymentComplete = true;
var AND = isEmailVerified && isPaymentComplete;
console.log(AND); // true

//_____________________________________________________________________________\\

/*   Utilisation de l'opérateur logique OR : */

/* 
L'opérateur logique OR (||) effectue une opération logique OU entre deux
expressions booléennes. Il renvoie true si au moins l'une des expressions est true,
sinon il renvoie false.
*/

// Déclarez deux variables booléennes isPremiumMember et
// hasCouponCode. Utilisez l'opérateur OR pour vérifier si au moins l'une des conditions
// est vraie et affichez le résultat dans la console.

var isPreniumMember = true;
var hasCouponCode = false;
var canAccessResource = isPreniumMember || hasCouponCode;
console.log(canAccessResource); // true

//_____________________________________________________________________________\\

/*   Utilisation de l'opérateur logique NOT-AND (NAND) : */

/* 
L'opérateur logique NOT-AND (NAND) (!&&) est une combinaison de
l'opérateur NOT (!) et de l'opérateur AND (&&). Il renvoie false si les deux expressions
sont true, sinon il renvoie true.
*/

// Déclarez deux variables booléennes isVerified et hasAccess. Utilisez
// l'opérateur NAND pour vérifier si les deux conditions sont fausses et affichez le résultat
// dans la console.

var isVerified = true;
var hasAcces = true;
var cannotAccessAdminPanel = !(isVerified && hasAcces);
console.log(cannotAccessAdminPanel); // false

//_____________________________________________________________________________\\

/*   Utilisation de l'opérateur logique NOT-OR (NOR) : */

/* 
L'opérateur logique NOT-OR (NOR) (!||) est une combinaison de l'opérateur
NOT (!) et de l'opérateur OR (||). Il renvoie false si au moins l'une des expressions est
true, sinon il renvoie true.
*/

// Déclarez deux variables booléennes isSubscribed et hasPromoCode.
// Utilisez l'opérateur NOR pour vérifier si les deux conditions sont fausses et affichez le
// résultat dans la console.

var isSubscribed = false;
var hasPromoCode = false;
var cannotAccessResource = !(isSubscribed || hasPromoCode);
console.log(cannotAccessResource); // true

//_____________________________________________________________________________\\

/*   Utilisation de l'opérateur logique XOR (OU exclusif) : */

/* 
L'opérateur logique XOR (^) effectue une opération logique OU exclusif entre
deux expressions booléennes. Il renvoie true si exactement l'une des expressions est
true, sinon il renvoie false.
*/

// Déclarez deux variables booléennes isWeekend et isHoliday. Utilisez
// l'opérateur XOR pour vérifier si exactement l'une des conditions est vraie et affichez le
// résultat dans la console.

var isWeekend = true;
var isHoliday = false;
var canLeave = isWeekend ^ isHoliday;
console.log(Boolean(canLeave)); // true

//_____________________________________________________________________________\\

/*   Introduction aux fonctions fléchées : */

/* 
Les fonctions fléchées sont une syntaxe abrégée pour déclarer des fonctions
en JavaScript. Elles offrent une manière concise de créer des fonctions anonymes. La
syntaxe des fonctions fléchées utilise la flèche => après la liste des paramètres et
permet d'omettre les mots-clés function et return dans certains cas.
*/

// Déclarez une fonction fléchée double qui prend un paramètre num et renvoie
// le double de ce nombre.

const double = (num) => num * 2;

console.log(double(5)); // Affiche 10
console.log(double(8)); // Affiche 16

//_____________________________________________________________________________\\

/*   Utilisation des objets JavaScript pour stocker des clés/valeurs : */

/* 
Les objets JavaScript sont des structures de données qui permettent de
stocker des clés et leurs valeurs associées. Les clés sont des chaînes de caractères
utilisées pour accéder aux valeurs dans l'objet. Les valeurs peuvent être de n'importe
quel type de données, y compris des nombres, des chaînes de caractères, des
tableaux, des fonctions, etc.
*/

// Créez un objet car avec les propriétés suivantes :
// brand : "Toyota"
// model : "Camry"
// year : 2020 Affichez chaque propriété de l'objet car dans la console

var car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    klaxon: function() {
    console.log("Beep Beep !");
    }
    };
    console.log(car.brand); // Toyota
    console.log(car.model); // Camry
    console.log(car.year); // 2020
    car.klaxon(); // "Beep beep!"

//_____________________________________________________________________________\\

/*   Utiliser la récursion pour créer un compte à rebours : */

/* 
La récursion est un concept où une fonction s'appelle elle-même pour
résoudre un problème. Dans cet exemple, nous allons utiliser la récursion pour créer
un compte à rebours en affichant les nombres à partir d'un certain nombre jusqu'à
zéro.
*/

// Écrivez une fonction countdownFrom qui utilise la récursion pour afficher
// les nombres décroissants à partir d'un nombre donné jusqu'à zéro. Testez votre
// fonction avec différentes valeurs.

function countdown(n) {
    if (n < 0) {
    return;
    }
    console.log(n);
    countdown(n - 1);
    }
    countdown(5);
    // Affiche 5
    // Affiche 4
    // Affiche 3
    // Affiche 2
    // Affiche 1
    // Affiche 0

//_____________________________________________________________________________\\

/* 114. Utiliser la récursion pour créer une plage de nombres : */

/* 
La récursion peut également être utilisée pour générer une séquence de
nombres dans une plage donnée. Dans cet exemple, nous allons utiliser la récursion
pour générer un tableau de nombres à partir d'un nombre de départ jusqu'à un nombre
de fin.
*/

// Écrivez une fonction rangeOfNumbers qui utilise la récursion pour générer
// un tableau de nombres dans une plage donnée (un nombre de départ et un nombre
// de fin inclus). Testez votre fonction avec différentes plages de nombres.

function rangeOfNumbers(start, end) {
    if (start > end) {
    return [];
    }
    var numbers = rangeOfNumbers(start, end - 1);
    numbers.push(end);
    return numbers;
    }
    var result = rangeOfNumbers(1, 5);
    console.log(result); // [1, 2, 3, 4, 5]
    var result = rangeOfNumbers(10, 19) // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    console.log(result);


//_____________________________________________________________________________\\

/* Comparer les portées des mots-clés var et let : */

/* 
En JavaScript, les mots-clés var et let sont utilisés pour déclarer des
variables. La différence entre eux réside dans leur portée. Les variables déclarées
avec var ont une portée de fonction, ce qui signifie qu'elles sont visibles à l'intérieur de
la fonction où elles sont déclarées. Les variables déclarées avec let ont une portée de
bloc, ce qui signifie qu'elles sont visibles uniquement à l'intérieur du bloc où elles sont
déclarées.
*/

// Déclarez une variable x à l'extérieur d'une fonction et assignez-lui une
// valeur. À l'intérieur de la fonction, déclarez une variable y avec var et une variable z
// avec let. Essayez d'accéder à ces variables à l'extérieur de la fonction et observez les
// résultats.


var x = 1


function compareScopes() {
    if (true) {
    var y = 'Je suis une variable var';
    //let z = 2;
    //console.log(z);
    }
    console.log(x);
    console.log(y); // Affiche "Je suis une variable var"
    //console.log(z); // Erreur : letVariable is not defined car elle
    // n'est disponible que le if contrairement à var qui a une portée globale et la
    // variable var est donc disponible en dehors du if
    }
    compareScopes();

//_____________________________________________________________________________\\

/*   116. Modifier un tableau déclaré avec const : */

/* 
Lorsque vous déclarez un tableau avec const, vous ne pouvez pas réassigner
le tableau lui-même à une autre valeur. Cependant, vous pouvez toujours modifier les
éléments individuels du tableau.
*/

// Déclarez un tableau fruits avec const contenant quelques noms de fruits.
// Modifiez l'un des éléments du tableau et affichez le tableau modifié.

const fruits = ["pomme", "orange", "mangue"];
fruits[0] = "citron";
console.log(fruits); // Affiche [citron, orange, mangue]

//_____________________________________________________________________________\\

/*    Empêcher la mutation d'un objet :  */

/* 
Lorsque vous déclarez un objet avec const, vous ne pouvez pas réassigner
l'objet lui-même à une autre valeur. Cependant, vous pouvez toujours modifier les
propriétés de l'objet, ce qui entraîne une mutation de l'objet.
*/

// Déclarez un objet user avec const contenant les propriétés name et email.
// Tentez de réassigner l'objet user à un nouvel objet. Observez l'erreur générée.

const user = {
    name: 'John',
    email: 30
    };

user.prenom = 40;
console.log(user); // Affiche { name: 'John', email: 30, prenom: 40 }

//_____________________________________________________________________________\\

/*   Utiliser les fonctions fléchées pour écrire des fonctions anonymes concises :  */

/* 
Les fonctions fléchées sont une syntaxe plus concise pour définir des
fonctions anonymes en JavaScript. Elles utilisent la syntaxe () => {} où les paramètres
de la fonction sont placés entre les parenthèses et le corps de la fonction est placé
entre les accolades.
*/

const anonymousFunction = () => {
    console.log("Bonjour, je suis une fonction anonyme.");
    };

//_____________________________________________________________________________\\

/*   Écrire des fonctions fléchées avec des paramètres : */

/*  Les fonctions fléchées peuvent également accepter des paramètres. Les
paramètres sont placés entre les parenthèses justes après la flèche (=>).  */

const anonymousFunction1 = (a, b) => {
    console.log(a * b);
    };

//_____________________________________________________________________________\\

/*   Définir des paramètres par défaut pour vos fonctions : */

/* 
Les paramètres par défaut permettent de définir une valeur par défaut pour
un paramètre de fonction au cas où aucun argument n'est passé lors de l'appel de la
fonction. Cela permet d'éviter les erreurs lorsque les arguments sont manquants.
*/

// Déclarez une fonction sayHello qui accepte un paramètre name. Définissez
// la valeur par défaut du paramètre name à "Guest". La fonction doit afficher "Hello,
// [name]!" où [name] est la valeur du paramètre name.

const sayHello = (name = "Guest") => {
    console.log(`Hello, ${name}!`);
    };
    sayHello(); // Affiche "Hello, Guest!"
    sayHello("Guest"); // Affiche "Hello, Guest!"

//_____________________________________________________________________________\\

/*   Utiliser le paramètre rest avec les paramètres de fonction : */

/* 
Le paramètre rest est utilisé pour représenter un nombre indéterminé
d'arguments sous forme d'array. Il permet de passer plusieurs arguments à une
fonction sans avoir à les définir individuellement.
*/

// Déclarez une fonction multiply qui accepte un paramètre multiplié suivi d'un
// paramètre rest numbers. La fonction doit multiplier chaque nombre dans le tableau
// numbers par le multiplier et afficher le résultat. Utilisez une boucle for...of.

const multiply = (...multiplié) => {
    let total = 0;
    for (let restNumber of multiplié) {
    total += restNumber;
    }
    console.log(total);
    };
    multiply(1, 2, 3); // Affiche 6
    multiply(4, 5, 6, 7); // Affiche 22

//_____________________________________________________________________________\\

/* Utiliser l'opérateur de propagation pour évaluer les tableaux sur place : */

/* 
L'opérateur de propagation (...) permet d'étendre un tableau ou un objet dans
un autre tableau ou objet. Il permet d'éviter d'utiliser des boucles pour copier des
éléments d'un tableau à un autre ou fusionner plusieurs tableaux.
*/

// Déclarez deux tableaux fruits1 et fruits2. Utilisez l'opérateur de propagation
// pour créer un nouveau tableau fruits qui contient tous les éléments de fruits1 suivis de
// tous les éléments de fruits2. Affichez le tableau fruits dans la console.

const fruits1 = [1, 2, 3];
const fruits2 = [...fruits1, 4, 5, 6];
console.log(fruits2); // Affiche [1, 2, 3, 4, 5, 6]

//_____________________________________________________________________________\\

/*   123 Utiliser la déstructuration pour extraire des valeurs des objets : */

/* 
La déstructuration est une syntaxe qui permet d'extraire des valeurs d'objets
ou d'arrays et de les assigner à des variables distinctes. Cela facilite l'accès aux
propriétés des objets et aux éléments des tableaux.
*/
const student = {
    name3: "Julien",
    age: 30,
    grade1: 2,
    };
    const { name3, age, grade1 } = student;
    console.log(name3); // Affiche "Julien"
    console.log(age); // Affiche 30
    console.log(grade1); // Affiche 2

/*  124  Utiliser la déstructuration pour assigner des variables à partir
 d'objets imbriqués : */

/* 
La déstructuration permet également d'extraire des valeurs à partir d'objets
imbriqués, c'est-à-dire des objets qui contiennent d'autres objets en tant que
propriétés.  
*/

// Déclarez un objet book avec les propriétés title et author, où author est un
// objet contenant les propriétés firstName et lastName. Utilisez la déstructuration pour
// extraire les valeurs title, firstName et lastName dans des variables distinctes. Affichez
// les variables dans la console.

const book3 = {
    title1: "John Doe",
    author1: {
        firstName: "bob",
        lastName: "dealan",
    }, 
};
    const { title1, author1: { firstName, lastName } } = book3;
    console.log(title1); // Affiche "John Doe"
    console.log(firstName); // Affiche bob
    console.log(lastName); // Affiche dealan

/*    125. Utiliser la déstructuration pour assigner des variables à partir de
tableaux : */

/* 
La déstructuration permet également d'extraire des valeurs à partir de
tableaux, en utilisant la syntaxe des crochets ([]).
*/

// Déclarez un tableau colors contenant trois couleurs. Utilisez la
// déstructuration pour extraire les valeurs des deuxième et troisième éléments du
// tableau dans des variables distinctes. Affichez les variables dans la console.

const colors = ["bleu", "blanc", "rouge"];
const [secondColor, thirdColor] = colors;

console.log(secondColor); // Affiche 2
console.log(thirdColor); // Affiche 3

/* 126. Déstructuration via les éléments rest : */

/* 
La déstructuration via les éléments rest permet d'extraire une partie d'un
tableau dans une nouvelle variable, tout en assignant le reste des éléments à une
autre variable.
*/

// Déclarez un tableau grades contenant cinq notes. Utilisez la déstructuration
// via les éléments rest pour extraire la première note dans une variable firstGrade, et
// assignez le reste des notes à une variable otherGrades. Affichez firstGrade et
// otherGrades dans la console.

const grades = [12, 16, 2, 9, 18];
const [firstGrade1, ...otherGrades] = grades;
console.log(firstGrade1); // Affiche 12
console.log(otherGrades); // Affiche [ 16, 2, 9, 18 ]

/*   127. Utiliser la déstructuration pour passer un objet en tant que
paramètres de fonction : */

/* 
La déstructuration peut être utilisée pour passer un objet en tant que
paramètres de fonction, permettant ainsi de spécifier uniquement les propriétés
nécessaires à utiliser à l'intérieur de la fonction.
*/

// Déclarez une fonction displayInfo qui accepte un paramètre student
// représentant un objet contenant les propriétés name et age. Utilisez la déstructuration
// à l'intérieur de la fonction pour afficher le nom et l'âge de l'étudiant dans la console.

const displayInfo(student) = {
    name4: "bil",
    lastName: "Doe",
    age: 30,
    };
    const greet = ({ firstName, lastName }) => {
    console.log(`Hello, ${firstName} ${lastName}!`);
    };
    greet(displayInfo); // Affiche "Hello, John Doe!"