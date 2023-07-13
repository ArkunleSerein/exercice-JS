// test variable Hello, world
/* Ceci est une variable qui contient le message à afficher sur la console. */
// voir ci-dessous
var message = "Hello, world!";
console.log(message);

//_____________________________________________________________________________\\

var score = 26;
var message2 = "Bonjour Julien !";

console.log(score); // affiche 26
console.log(message2); // affiche "Bonjour Julien !"

//_____________________________________________________________________________\\

var a = 7;
var b = a; // la variable b prend la valeur de la variable a
console.log(b); // affiche 28

//_____________________________________________________________________________\\

var name1 = "PARSY";
var age = 29;

console.log(name1); // affiche mon nom
console.log(age); // affiche mon age

//_____________________________________________________________________________\\

var city = "DOURGES";
console.log(city); // affiche ma Ville

//_____________________________________________________________________________\\

/* variable non initialisé */

var message3; // variable sans valeur
console.log(message3); // Affiche undefined

//_____________________________________________________________________________\\

var myVariable = 1;
var myvariable = 2;

console.log(myVariable);
console.log(myvariable);

//_____________________________________________________________________________\\

/* En JavaScript, var et let sont tous deux utilisés pour déclarer des variables,
mais ils diffèrent en termes de portée. Les variables déclarées avec var ont une portée
de fonction ou globale, tandis que les variables déclarées avec let ont une portée de
bloc. */

//_____________________________________________________________________________\\

function example() {
    var x = 10;
    let y = 5;
    var z = 12;
    if (true) {
    var x = 20;
    let y = 15;
    let w = 28;
    console.log(x); // Affiche 20
    console.log(y); // Affiche 15
    console.log(w); // affiche 28 en milieu de code     
    }
    console.log(x); // Affiche 20
    console.log(y); // Affiche 5
    console.log(z); // Affiche 12 en fin de code 
    }
    example();

//_____________________________________________________________________________\\

const myConstant = 29;
console.log(myConstant); // Affiche 29

// Tentative de réassignation de la variable
// myConstant = 30; // Erreur : TypeError: Assignment to constant variable.

//_____________________________________________________________________________\\

/*  Les calculs  */

var num1 = 12;
var num2 = 26;
var sum = num1 + num2; // addition
console.log(sum); // Affiche 38
var difference = num1 - num2; // soustraction
console.log(difference); // Affiche -14
var product = num1 * num2; // multiplication
console.log(product); // Affiche 312
var quotient = num1 / num2; // division
console.log(quotient); // Affiche 0.46...

//_____________________________________________________________________________\\

/*  Les incréments  */

var counter = 1;
counter++; // Équivaut à counter = counter + 1;
console.log(counter); // Affiche 2

/*  Les décréments */

var countdown = 2;
countdown--; // Equivaut à countdown = countdown - 1
console.log(countdown); // Affiche 1

/* Création de décimaux */

var myDecimal = 2.5;
console.log(myDecimal); // Affiche 2.5

// Multiplication de décimaux

var num3 = 2.7;
var num4 = 3.4;
var product1 = num3 * num4;
console.log(product1); // Affiche 9.18
var quotient1 = num3 / num4;
console.log(quotient1); // Affiche 0.79 ...
var remainder = num3 % num4; // trouve le reste de la division
console.log(remainder); // Affiche 2.7 le reste de la division 

//_____________________________________________________________________________\\
//_____________________________________________________________________________\\

/*   Les augmentations avec une affectation combinée */

/* En JavaScript, vous pouvez utiliser l'opérateur d'addition, de soustration,
de multiplication et de division augmentée (+=, -=, *=, /=) pour ajouter une valeur
à une variable et mettre à jour cette variable avec le résultat
de l'opération. */

var counter1 = 7;
counter1 += 3; // Equivaut à  counter1 = counter1 + 3
console.log(counter1); // Affiche 10
counter1 -= 3; // Equivaut à  counter1 = counter1 - 3
console.log(counter1); // Affiche 7
counter1 *= 3; // Equivaut à  counter1 = counter1 * 3
console.log(counter1); // Affiche 21
counter1 /= 3; // Equivaut à  counter1 = counter1 / 3
console.log(counter1); // Affiche 7

//_____________________________________________________________________________\\

/*   En JavaScript, vous pouvez échapper les guillemets dans les chaînes de
caractères en utilisant un caractère d'échappement (\) avant le guillemet.  */

var myString = "She said \"hello\"";
console.log(myString); // Affiche she said "hello"

//_____________________________________________________________________________\\

/*   Vous pouvez utiliser des guillemets simples (') pour entourer
une chaîne de caractères. */

var greeting = 'Hello everybody';
console.log(greeting); // Affiche Hello everybody

//_____________________________________________________________________________\\

/*   Les séquences d'échappement sont utilisées pour représenter des
caractères spéciaux dans les chaînes de caractères. Par exemple, \n représente un
saut de ligne.*/

var myString1 = "Hello\nWorld"
console.log(myString1);
// Affiche :
// Hello
// World

//_____________________________________________________________________________\\

/*   vous pouvez aussi concaténer (joindre) des chaînes de caractères
en utilisant l'opérateur de concaténation (+). */

var firstName = "Julien";
var lastName = "PARSY";
var fullName = firstName + " " + lastName;
console.log(fullName); // Affiche Julien PARSY

//_____________________________________________________________________________\\

/*   vous pouvez également utiliser l'opérateur d'affectation combinée (+=)
pour concaténer une chaîne de caractères à une autre chaîne et mettre à jour la
variable avec le résultat.*/

var greeting1 = "Hello";
greeting1 += " There";
console.log(greeting1); // Affiche Hello World

//_____________________________________________________________________________\\

/*   Vous pouvez utiliser des variables dans des chaînes de
caractères en les concaténant avec l'opérateur de concaténation (+).
     Ou Ajouter des variables à des chaînes de caractères avec l'opérateur
d'affectation combinée (+=) :   */

var name2 = "Julien";
var greeting2 = "Salut, " + name2 + " !";
console.log(greeting2); // Affiche Salut, Julien !

var name3 = "Julien";
var message4 = "Salut, ";
message4 += name3 + " !";
console.log(message4); // Affiche Salut, Julien !


//_____________________________________________________________________________\\


/*   En JavaScript, vous pouvez utiliser la propriété length pour trouver la
longueur d'une chaîne de caractères. */

var text = "Code toujours !";
console.log(text);
console.log(text.length); // Affiche 15

//_____________________________________________________________________________\\

/*   vous pouvez utiliser la notation entre crochets ([]) avec un
index de 0 pour accéder au premier caractère d'une chaîne de caractères. et ainsi de suite. 
l'index .length -1 permet d'accéder au dernier caractère ou au énieme caractère en partant de la fin  */

var word = "D'accord"
console.log(word[0]); // Affiche D
console.log(word[2]); // Affiche a
console.log(word[word.length -1]); // Affiche d
console.log(word[word.length -4]); // Affiche c

//_____________________________________________________________________________\\

/*  les chaînes de caractères sont immuables, ce qui signifie
qu'elles ne peuvent pas être modifiées directement. Vous pouvez créer de nouvelles
chaînes en utilisant des opérations comme la concaténation. */

var original = "Et ça continue";
var modified = original + " encore et encore";
console.log(original); // Affiche Et ça continue
console.log(modified); // Affiche Et ça continue encore et encore 

//_____________________________________________________________________________\\

/*   Vous pouvez combiner des variables, des opérateurs et des
chaînes de caractères pour créer une phrase complète. */

var myNoun = "dog";
var myVerb = "ran";
var myAdjective = "quickly";
var myAdverb = "away";
var sentence = "My " + myNoun + " " + myVerb + " " + myAdverb + " " + myAdjective + ".";
console.log(sentence); // Affiche My dog ran away quickly.

//_____________________________________________________________________________\\

/*   
Vous pouvez utiliser des tableaux pour stocker plusieurs
valeurs dans une seule variable. Les tableaux sont déclarés en utilisant des crochets
([]) (index) et les valeurs sont séparées par des virgules. 

Vous pouvez utiliser des indexes pour accéder aux données stockées dans un tableau. 
L'index commence à 0 pour le premier élément, 1 pour le
deuxième élément, et ainsi de suite.  
*/


var myArray = ["pomme", "poire", "scoobidoo"];
console.log(myArray[0]); // Affiche apple
console.log(myArray[1]); // Affiche poire
console.log(myArray[2]); // Affiche scoobidoo

//_____________________________________________________________________________\\

/*   vous pouvez créer des tableaux multidimensionnels en
stockant un tableau à l'intérieur d'un autre tableau. */

var myArray1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
console.log(myArray1[0][2]); // Affiche 3
console.log(myArray1[1][1]); // Affiche 5
console.log(myArray1[2][0]); // Affiche 7

//_____________________________________________________________________________\\

/*  vous pouvez utiliser des indexes pour modifier les données
stockées dans un tableau. */

var myArray2 = ["pomme", "poire", "scoobidoo"];
myArray2[2] = "Aahh";
console.log(myArray2); // Affiche  [ 'pomme', 'poire', 'Aahh' ]

//_____________________________________________________________________________\\

/*   
vous pouvez utiliser la méthode push pour ajouter des
éléments à la fin d'un tableau. La méthode push modifie le tableau d'origine en ajoutant
les éléments spécifiés à la fin. 
*/

var myArray = ["pomme", "poire", "scoobidoo"];
myArray.push("Aahh");
console.log(myArray); // Affiche  [ 'pomme', 'poire', 'scoobidoo', 'Aahh' ]

//_____________________________________________________________________________\\

/* 
la méthode pop pour supprimer le dernier
élément d'un tableau. La méthode pop modifie le tableau d'origine en supprimant et
renvoyant le dernier élément.
*/

var myArray = ["pomme", "poire", "scoobidoo"];
var removedmyArray = myArray.pop();
console.log(myArray); // Affiche  [ 'pomme', 'poire' ]
console.log(removedmyArray); // Affiche scoobidoo

//_____________________________________________________________________________\\

/* 
vous pouvez utiliser la méthode shift pour supprimer le
premier élément d'un tableau. La méthode shift modifie le tableau d'origine en
supprimant et renvoyant le premier élément.
*/

var myArray = ["pomme", "poire", "scoobidoo"];
var removedmyArray = myArray.shift();
console.log(myArray); // Affiche  [ 'poire', 'scoobidoo' ]
console.log(removedmyArray); // Affiche pomme

//_____________________________________________________________________________\\

/* 
vous pouvez utiliser la méthode unshift pour ajouter des
éléments au début d'un tableau. La méthode unshift modifie le tableau d'origine en
ajoutant les éléments spécifiés au début.
*/

var myArray = ["pomme", "poire", "scoobidoo"];
myArray.unshift("Des");
console.log(myArray);

//_____________________________________________________________________________\\

/* 
Vous pouvez utiliser un tableau pour créer une liste de courses en ajoutant
et en supprimant des éléments.
*/

var shoppingList = [];
console.log(shoppingList); // Affiche []

shoppingList.push("pomme", "poire", "scoobidoo", "Oeuf");
console.log(shoppingList); // Affiche [ 'pomme', 'poire', 'scoobidoo', 'Oeuf' ]

shoppingList.pop(0);
console.log(shoppingList); // Affiche [ 'pomme', 'poire', 'scoobidoo' ]

//@dev 


//_____________________________________________________________________________\\
//_____________________________________________________________________________\\

/*  Écrire du JavaScript réutilisable avec des fonctions :   */


/*   
Les fonctions en JavaScript vous permettent de regrouper des blocs de code
que vous pouvez réutiliser à différents endroits de votre programme.
*/

function greet() {
    console.log("Salut !");
}
greet(); // appelle la fonction greet et affiche Salut ! dans la console

function calculateArea(width, height) {
    var result = width * height;
    console.log(result);
}

calculateArea(6, 7); // Appelle la fonction calculateArea avec les arguments 6 et 7,
// affiche 42 dans la console

//_____________________________________________________________________________\\

/* 
Vous pouvez utiliser le mot-clé return pour renvoyer une valeur
depuis une fonction. La valeur renvoyée peut être utilisée dans d'autres parties de
votre code.
*/

function calculateSum(num5, num6) {
    return num5 + num6;
    }
    var result = calculateSum(2, 3); // Appelle la fonction calculateSum avec les arguments 2 et 3, assigne le résultat à la variable result
    console.log(result); // Affiche 5 dans la console

//_____________________________________________________________________________\\

/* 
les variables déclarées à l'extérieur de toutes les fonctions
sont des variables globales et peuvent être utilisées dans n'importe quelle partie de
votre code, y compris à l'intérieur des fonctions. 
*/

var message5 = "I'm message5";
function printMessage() {
console.log(message5);
}
printMessage(); // Affiche I'm message5 dans la console

//_____________________________________________________________________________\\

/* 
les variables déclarées à l'intérieur d'une fonction sont des
variables locales et ne peuvent être utilisées qu'à l'intérieur de cette fonction. Ces
variables ont une portée limitée au bloc de code de la fonction.
*/

function greet() {
    var nom = "Variable locale";
    console.log(nom);
    }
greet(); // Affiche I'm local dans la console
// console.log(nom); Affiche ReferenceError: nom is not defined car nom n'est pas accessible ici

//_____________________________________________________________________________\\

/* 
Lorsqu'une variable locale a le même nom qu'une variable globale, la variable
locale a la priorité à l'intérieur de la fonction. Cela signifie que la variable locale est
utilisée plutôt que la variable globale lorsque vous faites référence à cette variable à
l'intérieur de la fonction.
*/

var count = "global";
function updateCount() {
var count = "local";
console.log(count);
}
updateCount(); // Affiche local dans la console
console.log(count); // Affiche global dans la console

//_____________________________________________________________________________\\
//_____________________________________________________________________________\\

/* 
En JavaScript, une fonction qui ne renvoie pas explicitement de valeur
renvoie une valeur indéfinie (undefined).
*/

function printMessage1() {
    // Code de la fonction...
    }
var result = printMessage1();
console.log(result); // Affiche undefined dans la console

//_____________________________________________________________________________\\

/* 
vous pouvez attribuer le résultat d'une fonction à une variable
en utilisant l'opérateur d'assignation (=). Cela vous permet de stocker et d'utiliser la
valeur renvoyée par la fonction
*/

function calculateSum1(a, b) {
    return a + b;
    }
    var result = calculateSum1(3, 4);
    console.log(result); // Affiche 7 dans la console

//_____________________________________________________________________________\\

/* 
vous pouvez utiliser un tableau pour simuler une file d'attente.
Pour ajouter un élément à la fin de la file d'attente, vous pouvez utiliser la méthode
push. Pour supprimer le premier élément de la file d'attente, vous pouvez utiliser la
méthode shift.
*/

var queue = [1, 2, 3, 4, 5];

queue.push(6);
console.log(queue); // Affiche [1, 2, 3, 4, 5, 6]

var removedItem = queue.shift();
console.log(queue); // Affiche [2, 3, 4, 5, 6]
console.log(removedItem); // Affiche 1

//_____________________________________________________________________________\\
//_____________________________________________________________________________\\

/* 
les valeurs booléennes sont true (vrai) et false (faux). Elles
sont utilisées pour des opérations logiques et de comparaison.
*/

var isRaining = true;
var isSunny = false;
console.log(isRaining); // Affiche true dans la console
console.log(isSunny); // Affiche false dans la console

//_____________________________________________________________________________\\

/* 
L'instruction if permet d'exécuter un bloc de code si une condition est évaluée
à true (vrai). Si la condition est évaluée à false (faux), le bloc de code est ignoré.
*/

var age1 = 29;
if (age1 >= 18) {
console.log("Vous êtes majeur.");
}

//_____________________________________________________________________________\\

/* 
En JavaScript, l'opérateur d'égalité (==) permet de comparer deux valeurs. Il
renvoie true (vrai) si les valeurs sont égales et false (faux) sinon. L'opérateur d'égalité
effectue une conversion de type si nécessaire.
Exemple :
console.log(5 == 5); // Affiche true dans la console
console.log(5 == "5"); // Affiche true dans la console (conversion de type)
console.log(5 == 6); // Affiche false dans la console
*/

var number = 29;
console.log(number == 10); // renvoi False

//_____________________________________________________________________________\\

/* 
l'opérateur d'égalité stricte (===) permet de comparer deux
valeurs en vérifiant à la fois leur valeur et leur type. Il renvoie true (vrai) si les valeurs
sont égales et de même type, et false (faux) sinon.
Exemple :
console.log(5 === 5); // Affiche true dans la console
console.log(5 === "5"); // Affiche false dans la console (types différents)
console.log(5 === 6); // Affiche false dans la console
*/

var value = 29
console.log(value === number); // renvoi True
console.log(value === 10); // renvoi False

//_____________________________________________________________________________\\

/* 
En JavaScript, vous pouvez comparer différentes valeurs à l'aide
d'opérateurs de comparaison tels que < (inférieur), > (supérieur), <= (inférieur ou égal),
>= (supérieur ou égal), != (différent) et !== (différent strict).

Exemple :
console.log(5 < 10); // Affiche true dans la console
console.log(5 > 10); // Affiche false dans la console
console.log(5 <= 10); // Affiche true dans la console
console.log(5 >= 10); // Affiche false dans la console
console.log(5 != 10); // Affiche true dans la console
console.log(5 !== "5"); // Affiche true dans la console
*/

var a = 29;
var b = 7;

console.log( a < b); // Affiche False dans la console
console.log( a > b); // Affiche True dans la console
console.log( a <= b); // Affiche False dans la console
console.log( a >= b); // Affiche True dans la console
console.log( a != b); // Affiche True dans la console
console.log( a !== "b"); // Affiche True dans la console

//_____________________________________________________________________________\\

/* 
L'opérateur d'inégalité (!=) renvoie true (vrai) si les deux valeurs comparées
sont différentes, et false (faux) si elles sont égales. L'opérateur d'inégalité effectue une
conversion de type si nécessaire.

Exemple :

console.log(5 != 10); // Affiche true dans la console
console.log(5 != "5"); // Affiche false dans la console (conversion de type)
console.log(5 != 5); // Affiche false dans la console
*/

var x = 29;
var y = 29;

console.log(x != 0); // Affiche true dans la console
console.log(x != "0"); // Affiche True dans la console (conversion de type)
console.log(x != 0); // Affiche True dans la console


console.log(y != 10); // Affiche True dans la console
console.log(y != "10"); // Affiche True dans la console (conversion de type)
console.log(y != 10); // Affiche True dans la console

//_____________________________________________________________________________\\

/* 
L'opérateur supérieur à (>) renvoie true (vrai) si la valeur de gauche est
strictement supérieure à la valeur de droite, et false (faux) sinon.
L'opérateur supérieur ou égal à (>=) renvoie true (vrai) si la valeur de gauche
est supérieure ou égale à la valeur de droite, et false (faux) sinon.
*/

var a1 = 7

console.log(a1 > 10); // Affiche False dans la console
console.log(a1 > 10); // Affiche False dans la console
console.log(a1 > 10); // Affiche False dans la console

var b1 = 7

console.log(b1 >= 20); // Affiche False dans la console
console.log(b1 >= 20); // Affiche False dans la console
console.log(b1 >= 20); // Affiche False dans la console

//_____________________________________________________________________________\\

/* 
L'opérateur inférieur à (<) renvoie true (vrai) si la valeur de gauche est
strictement inférieure à la valeur de droite, et false (faux) sinon.
L'opérateur inférieur ou égal à (<=) renvoie true (vrai) si la valeur de gauche
est inférieure ou égale à la valeur de droite, et false (faux) sinon.
*/

var c = 7;

console.log(c < 50); // Affiche True dans la console
console.log(c < 50); // Affiche True dans la console
console.log(c < 50); // Affiche True dans la console

var d = 7;

console.log(d <= 30); // Affiche True dans la console
console.log(d <= 30); // Affiche True dans la console
console.log(d <= 30); // Affiche True dans la console

//_____________________________________________________________________________\\

/* 
L'opérateur logique ET (&&) renvoie true (vrai) si les deux expressions de
chaque côté de l'opérateur sont évaluées à true, et false (faux) sinon. Si la première
expression est évaluée à false, la deuxième expression n'est pas évaluée car le
résultat final sera toujours false.
L'opérateur logique OU (||) renvoie true (vrai) si au moins l'une des
expressions de chaque côté de l'opérateur est évaluée à true, et false (faux) sinon. Si
la première expression est évaluée à true, la deuxième expression n'est pas évaluée
car le résultat final sera toujours true.
*/

var age2 = 29;
var isStudent = true;

console.log( age2 >= 18); // Affiche True dans la console
console.log( isStudent && true); // Affiche True dans la console


var isMorning = false;
var isWeekend = false;

console.log(false || true); // Affiche true dans la console
console.log(false || true); // Affiche true dans la console

//_____________________________________________________________________________\\

