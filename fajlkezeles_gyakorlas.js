import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'uvegek.txt');

let content;
try {
    content = fs.readFileSync(filePath, 'utf-8');
} catch (err) {
    console.log(err);
    process.exit(1);
}

console.log('1. feladat');
console.log('\tAdatok beolvasása');
let uvegek = content.split(', ').map(Number);


console.log('2. feladat');
let lekvar = 35; 
console.log(`Mari néni lekvárja (dl): ${lekvar}`);

console.log('3. feladat');
let maxUvegMeret = Math.max(...uvegek);
let maxUvegIndex = uvegek.indexOf(maxUvegMeret) + 1; 
console.log(`A legnagyobb üveg: ${maxUvegMeret} dl és ${maxUvegIndex}. a sorban.`);

console.log('4. feladat');
let maradekLekvar = lekvar;
for (let i = 0; i < uvegek.length; i++) {
    if (maradekLekvar >= uvegek[i]) {
        maradekLekvar -= uvegek[i];
    } else {
        break;
    }
}
if (maradekLekvar === 0) {
    console.log('Elegendő üveg volt.');
} else {
    console.log('Nem volt elegendő üveg.');
}
