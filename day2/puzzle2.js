const fs = require("fs");

const winners = ["XC", "YA", "ZB"];
const lossers = ["XB", "YC", "ZA"];

function score(p1, p2) {
	you = p2[0];
	oponent = p1[0];

	//let s = you.charCodeAt(0) - 'X'.charCodeAt(0) + 1;

    let s = 0;

    switch (you) {
        case 'X':
            for (i of lossers) {
                if (i.includes(oponent)) {
                    s += i.charCodeAt(0) - 'X'.charCodeAt(0) + 1;
                    break;
                }
            }
            s += 0;
            break;
        case 'Y':
            s += oponent.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
            s += 3;
            break;
        case 'Z':
            for (i of winners) {
                if (i.includes(oponent)) {
                    s += i.charCodeAt(0) - 'X'.charCodeAt(0) + 1;
                    break;
                }
            }
            s += 6;
            break;
    }
	return s;
}

let lines = fs.readFileSync("puzzle1.txt", {encoding: "utf8"}).toString().split("\n");

let ss = 0;

for (let line of lines) {
    if (line == "") continue;

	const [oponent, you] = line.split(' ');
	ss += score(oponent, you);
}

console.log(ss);
