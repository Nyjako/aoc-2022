
priorities = 0
lines = open("puzzle.txt", 'r').readlines()

for line in lines:
	if line == '':
		continue
	
	line = line.replace('\n', '')
	
	left  = list( line[: len(line) // 2] )
	right = list( line[len(line) // 2 :] )

	inter = set(left).intersection(right)

	for i in inter:
		code = ord(i)

		if code >= ord('a') and code <= ord('z'):
			priorities += code - ord('a') + 1
		else:
			priorities += code - ord('A') + 27
	pass

print(priorities)