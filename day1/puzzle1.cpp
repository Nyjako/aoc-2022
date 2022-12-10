#include <iostream>
#include <tuple>
#include <string>
#include <fstream>

using namespace std;

void solve(string filename)
{
	tuple<unsigned short, unsigned int> best = {1, 0};
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
				if (get<1>(curr) > get<1>(best)) {
					best = curr;
				}
				curr = {++current, 0};
			}
			else {
				get<1>(curr) += atoi(tp.c_str());
			}
		}
		file.close();

		if (get<1>(curr) > get<1>(best))
		{
			best = curr;
		}

		cout << get<0>(best) << ' ' << get<1>(best) << '\n';
	}
}

int main()
{
	solve("puzzle1.txt");
	return 0;
}