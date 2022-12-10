#include <iostream>
#include <tuple>
#include <string>
#include <fstream>

using namespace std;

void solve(string filename)
{
	tuple<unsigned short, unsigned int> best[3] = {{1, 0}, {1, 0}, {1, 0}};
	unsigned short current = 1;

	fstream file;
	file.open(filename, ios::in);
	if (file.is_open())
	{
		tuple<unsigned short, unsigned int> curr = {current, 0};
		string tp;
		while (getline(file, tp))
		{
			if (tp == "") {
				for (int i = 0; i < 3; i++) {
					if (get<1>(curr) > get<1>(best[i])) {
						best[i] = curr;
						break;
					}
				}
				curr = {++current, 0};
			}
			else {
				get<1>(curr) += atoi(tp.c_str());
			}
		}
		file.close();

		for (int i = 0; i < 3; i++)
		{
			if (get<1>(curr) > get<1>(best[i]))
			{
				best[i] = curr;
				break;
			}
		}

		unsigned int total = 0;
		for (int i = 0; i < 3; i++)
		{
			total += get<1>(best[i]);
		}

		cout << total << '\n';
	}
}

int main()
{
	solve("puzzle1.txt");
	return 0;
}