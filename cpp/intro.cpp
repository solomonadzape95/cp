#include <iostream>
#include <string>
using namespace std;

//forward declaration
string greet(int hourTime);

int main() {
  int a, b;
  cout << "Enter 2 numbers: ";
  cin >> a >> b;
  cout << "The sum is: " << a + b << endl;
  cout << greet(13);
  return 0;
}

// use of the forward declaration
string greet(int hourTime) {
if(hourTime < 12) return "Good Morning";
else return "Good Afternoon";
}