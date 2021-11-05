/*
//while
let colors = ['yellow', 'blue', 'red', 'orange'];
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}


//for
let colors = ['yellow', 'blue', 'red', 'orange']
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


//foreach
let colors = ['yellow', 'blue', 'red', 'orange'];
colors.forEach(element => console.log(element));

/*
1. How many lines does my for loop and my while loop take?
- for loopt: 4
- while loop: 4
2. How many lines does my forEach method take?:
- 4
(Are these lines in the editor?, or is it the outcome in the console?)
3. What other advantages do using an array method have over a for or a while loop? For example, which method do you find easier to read? Why?
- forEach is simpler to write down, thus makes it easier to read. and I extremely dislike a while loop as it can crash the computer.

4. Can you use an array method on an object?
No
*/


let obj = {
    name: "Stefan",
    age: "35",
    clothing: "casual",
    shoes: "none at the moment",
    hairColor: "dark-brown"
}

for (let propt in obj) {
    console.log(propt + ': ' + obj[propt]);
}
console.log(obj);
/*I believe that I just gave date to the console. However, when I just console the obj. The writing in the console is much clearer.*/