let lychrelNumbers = [];
for (let i = 0; i < 10000; i++) {
    let number = i;
    for (let j = 0; j < 50; j++) {
        if (!(parseInt(number.toString().split("").reverse().join("")) === number) || j === 0) {
            number = parseInt(number.toString().split("").reverse().join("")) + number;
            if (j === 49 && !(parseInt(number.toString().split("").reverse().join("")) === j)) {
                lychrelNumbers.push(i)
            }
        }
    }
}

console.log(lychrelNumbers.length);
