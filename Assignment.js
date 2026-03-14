const ROWS = 5;
let num = 1;

for (let i = 1; i <= ROWS; i++) {

    let line = "";

    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num++;
    }

    console.log(line.trim());
}
