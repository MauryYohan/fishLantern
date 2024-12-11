import { readFileSync } from 'fs';

const test = readFileSync('input/test.txt', 'utf-16le');
const final = readFileSync('input/final.txt', 'utf-16le');

const DAYS = 80;

let fishes = final.split(',').map(Number);
let newFish = 0;

console.log('Initial state: ', fishes);

for (let day = 1; day <= DAYS; day++) {
    console.log('Day', day);
    const fishesLength = fishes.length;
    for (let i = 0; i < fishesLength; i++) {
        if (fishes[i] === 0) {
            fishes[i] = 6;
            newFish++;
        } else {
            fishes[i] = fishes[i] - 1;
        }
        for (let j = 0; j < newFish; j++) {
            fishes.push(8);
        }
        newFish = 0;
    }
    console.log('Fishes: ', fishes);
}

console.log('Final state: ', fishes.length);