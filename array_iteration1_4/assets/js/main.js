let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);

let celsius = fahrenheit.map(grad => Math.ceil((grad - 32) / 1.8));
console.log(celsius)