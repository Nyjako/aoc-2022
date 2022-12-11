const fs = require('fs');

function overlap(left, right) {
	const [left1, left2]   = left.split('-');
	const [right1, right2] = right.split('-');
	
	return (
		(parseInt(left1) <= parseInt(right1) && parseInt(left2) >= parseInt(right2)) ||
		(parseInt(left1) >= parseInt(right1) && parseInt(left2) <= parseInt(right2))
	);
}

const lines = fs.readFileSync('puzzle.txt').toString().split('\n');
let counter = 0;

for (line of lines) {
	if (line == '') continue;

	const [left, right] = line.split(',');
	let t = overlap(left, right);

	if (t) counter++;
	console.log(t);
}

console.log(counter);