import { readFileSync } from 'fs';

const test = readFileSync('input/test.txt', 'utf-16le');
const final = readFileSync('input/final.txt', 'utf-16le');

const days = 80;

let numbers = final.split(',').map(Number);

console.log('Initial state: ', numbers);
let newFish = 0;
for (let i = 0; i < days; i++) {
    // Add new fish in numbers for each newFish value
    for (let j = 0; j < newFish; j++) {
        numbers.push(9);
    }
    newFish = 0;

    console.log(`Day ${i + 1}`);
    numbers = numbers.map((n) => {
        n = n - 1;
        if (n === -1) {
            n = 6;
        }
        if (n === 0) {
            newFish++;
        }
        return n;
    })

    console.log(numbers);
}

console.log('Final state: ', numbers.length);