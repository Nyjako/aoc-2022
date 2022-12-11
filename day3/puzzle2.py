
priorities = 0
lines = open("puzzle.txt", 'r').readlines()
sets  = [[]]

for line in lines:
	if line == '':
		continue
	elif len(sets[len(sets) - 1]) >= 3:
		sets.append([])

	sets[len(sets) - 1].append(list(line.replace('\n', '')))

for block in sets:
	[e1, e2, e3] = block

	inter = set(e1).intersection(e2, e3)

	for i in inter:
		code = ord(i)

		if code >= ord('a') and code <= ord('z'):
			priorities += code - ord('a') + 1
		else:
			priorities += code - ord('A') + 27
	pass

print(priorities)