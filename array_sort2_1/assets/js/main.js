let names = ["Sergio", "Hannah", "Regallager", "Reliefpfeiler","Rentner"]

let reverseNames = (str) => {
    let splitString = str.split("")
    let reverseString = splitString.reverse()
    const arrayToString = reverseString.join("")
    return arrayToString
}
console.log(reverseNames("Sergio"));
console.log(reverseNames("Hannah"));
console.log(reverseNames("Regallager"));
console.log(reverseNames("Reliefpfeiler"));
console.log(reverseNames("Rentner"));