
// ========== Slice =========
// erstellt einen neuen Array, der eine Kopie eines Teils des ursprünglichen Arrays darstellt

let fruits = ["Banane", "Apfel", "Orange", "Mango"]
let obstSalat = fruits.slice(1,3)
console.log("fruits", fruits);
console.log("obstsalat", obstsalat);

fruits.sort()
console.log(fruits); // bei wörtern sortiert sort von a nach b bezogen auf den anfangsbuchstaben

// sort()

let number = [23, 1, 5, 67, 9]
number.sort()
console.log("sort: ", number);

// Splice()
// fügt etwas an eine gewünschte stelle hinzu und oder kann an gewünschter stelle ein element ersetzen/entfernen
let myHero = ["Deadpool","Ironman","Batman", "Aragorn"]
myHero.splice(2, 0, "Boromir") 
console.log("splice: ", myHero);

// Reverse()
// Kehrt die reihenfolge der werte um
let number2 = [4,8,10,5,1]
number2.reverse()
console.log("reverse", number2);

// ========== MAP() ================

let myNumArr = [1, 2, 3, 4, 5]
console.log(myNumArr);

let multi = myNumArr.map(num => num * num)
console.log("map: ", multi);

//===========FOREACH()=================

let tiere = ["hund","katze","maus"]
tiere.forEach((pet, index) => {
    console.log(index + ": " + pet);
})

// - beim ersten durchlauf der Schleife ist "pet" gleich "hund" und index gleich 0

let num = [1,2,3]

//i = index / arr = array // el = element
num.forEach((index, array) => {
    console.log("Index", + index);
    console.log("Gesamtes Array: ", array);
    console.log("Element: ", element);
})

// ============== MAP & FOREACH================

let num3 = [1,2,3,4,5]

const evenOdd = (pizza) => {
    let dubble = pizza.map(num => num * 2)
    console.log(dubble);

    // geht über das "verdoppelte" array und prüft, welche Zahl gerade/ungerade ist
    dubble.forEach(dubbleNum => {
        console.log("verdoppelte Nummer: " + dubbleNum);
        if (dubbleNum % 2 == 0){
            console.log("nummer ist gerade");
        } else {
            console.log("Nummer ist ungerade");
        }
    })
}

evenOdd(num3)
