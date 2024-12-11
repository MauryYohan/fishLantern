import { readFileSync } from 'fs';

const test = readFileSync('input/test.txt', 'utf-16le');
const final = readFileSync('input/final.txt', 'utf-16le');

const DAYS = 256;

let initial_fishes = final.split(',').map(Number);
let fishes = [];

// Change le tableau de départ qui est un tableau de poissons en un tableau d'occurence
for (let i = 0; i < 9; i++) {
    fishes.push(initial_fishes.filter(fish => fish === i).length);
}

console.log('Initial state: ', {fishes});

for (let day = 1; day <= DAYS; day++) {
    // On supprime la première valeur du tableau et on la met dans la variable val
    const index0 = fishes.shift();

    fishes.push(index0);
    fishes[6] += index0;

    console.log(`Day ${day} - Fishes: ${fishes}`);
}

// Resultat final
const res = fishes.reduce((acc, fish) => {
    return acc + fish;
}, 0);
console.log(`Final state: ${res}`);