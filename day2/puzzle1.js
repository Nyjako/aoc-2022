const fs = require("fs");

const winners = ["XC", "YA", "ZB"];

function score(p1, p2) {
	you = p2[0];
	oponent = p1[0];
	let s = you.charCodeAt(0) - 'X'.charCodeAt(0) + 1;
	if (you.charCodeAt(0) - 'X'.charCodeAt(0) == oponent.charCodeAt(0) - 'A'.charCodeAt(0)) {
		s += 3;
	}
	else {
		for (let c of winners) {
			if (c.includes(you) && c.includes(oponent)) {
				s += 6;
				break;
			}
		}
	}

	return s;
}

let lines = fs.readFileSync("puzzle1.txt", {encoding: "utf8"}).toString().split("\n");

let ss = 0;

for (let line of lines) {
	// console.log(line);

	const [oponent, you] = line.split(' ');
	ss += score(oponent, you);
}

console.log(ss);
