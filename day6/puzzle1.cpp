#include <iostream>
#include <fstream>
#include <string>

#define COUNT 4

using namespace std;

int solve(string filename)
{
	string s = "";
	fstream file;
	file.open(filename, ios::in);
	if (file.is_open())
	{
		string tp;
		while (getline(file, tp))
		{
			s += tp;
		}
		file.close();
	}

	char history[COUNT] = {' ', ' ', ' ', ' '};

	for (int x = 0; x < s.size(); x++) 
	{
		char c = s[x];
		for (int i = 1; i < COUNT; i++) 
		{
			history[i - 1] = history[i];
		}

		history[COUNT - 1] = c;

		bool found = false; // I probably can use goto instead of this
		for (int i = 0; i < COUNT && !found; i++)
		{
			for (int j = i + 1; j < COUNT; j++)
			{
				if (history[i] == history[j] || history[j] == ' ' || history[i] == ' ') 
				{
					found = true;
					break;
				}
			}
		}

		if (!found) {
			// string ret = "";
			// for (int i = 0; i < COUNT && !found; i++)
			// {
			// 	ret += history[i];
			// }
			return x + 1;
		}
	}
	return -1;
}

int main()
{
	cout << solve("puzzle.txt") << '\n';

	return 0;
}