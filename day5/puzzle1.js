const fs = require("fs");

const lines = fs.readFileSync("puzzle.txt").toString().split('\n');
const stack_size = Math.ceil( lines[0].length / 4 );
let stack = [];

function optimize_stack(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].filter(n => n);
	}
	return arr;
}

for (let i = 0; i < stack_size; i++) {
	stack.push([]);
}

let counter;

for (counter = 0; counter < lines.length && lines[counter] != ''; counter++) {
	for (let j = 0; j < stack_size; j++) {
		let curr = lines[counter][j * 4 + 1];
		if (curr != ' ' && !/\d/.test(curr)) {
			stack[j].push(curr);
		}
	}
}

for (counter; counter < lines.length; counter++) {
	if (lines[counter] == '') continue;
	let [, count, , from, , to] = lines[counter].split(' ');
	stack = optimize_stack(stack);

	let to_move = [];
	while (count > 0) {
		to_move.push( stack[from - 1].shift() );
		count--;
	}

	stack[to - 1] = [...to_move.reverse(), ...stack[to - 1]];
	console.table(stack);
}

for (let i of stack) {
	process.stdout.write(i[0]);
}
process.stdout.write('\n');