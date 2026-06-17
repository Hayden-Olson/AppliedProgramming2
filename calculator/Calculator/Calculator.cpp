// Calculator.cpp : This file contains the 'main' function. Program execution begins and ends there.
//
using namespace std;
#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <stack>
#include <queue>


int precedence(char op) {
	if (op == '(' || op == ')') return 0;
	if (op == '+' || op == '-') return 1;
	if (op == '*' || op == '/') return 2;
	if (op == '^') return 3;
	return 0;
}
double applyOperator(double a, double b, char op) {
	switch (op) {
	case '+': return a + b;
	case '-': return a - b;
	case '*': return a * b;
	case '/': return a / b;
	case '^': return pow(a,b);
	}
	return 0;
}
void operation(stack<char>* operators, stack<double>* operands) {
	char op = operators->top();
	operators->pop();
	double b = operands->top();
	operands->pop();
	double a = operands->top();
	operands->pop();
	double result = applyOperator(a, b, op);
	operands->push(result);
	return;
}
double translate(string input) {
	stack<char> operators;
	stack<double> operands;
	for (int i = 0; i < input.length(); i++) {
		if (isdigit(input[i])) {
			double num = 0;
			while (i < input.length() && isdigit(input[i])) {
				num = num * 10 + (input[i] - '0');
				i++;
			}
			operands.push(num);
			i--;
		}
		else if (input[i] == '+' || input[i] == '-' || input[i] == '*' || input[i] == '/'|| input[i] == '^') {
			while (operators.size() > 0 && precedence(operators.top()) >= precedence(input[i])) {
				operation(&operators, &operands);
			}
			operators.push(input[i]);
		}
		else if (input[i] == '(') {
			operators.push(input[i]);
		}
		else if (input[i] == ')') {
			while (operators.size() > 0 && operators.top() != '(') {
				operation(&operators, &operands);
			}
			if (operators.size() > 0) {
				operators.pop();
			}
		}
	}
	while (operators.size() > 0) {
		operation(&operators, &operands);
	}
	return operands.top();
}



int main()
{
	string input;
	cout << "Enter an expression: ";
	cin >> input;
	cout << "Result: " << translate(input) << endl;
	cout<<translate("43+3*4-5/6")<<endl;

	cout << translate("43+3^2*4-5/6") << endl;

	cout << translate("3+4*2/(1-5)^2^3") << endl;
    return 0;
}

// Run program: Ctrl + F5 or Debug > Start Without Debugging menu
// Debug program: F5 or Debug > Start Debugging menu

// Tips for Getting Started: 
//   1. Use the Solution Explorer window to add/manage files
//   2. Use the Team Explorer window to connect to source control
//   3. Use the Output window to see build output and other messages
//   4. Use the Error List window to view errors
//   5. Go to Project > Add New Item to create new code files, or Project > Add Existing Item to add existing code files to the project
//   6. In the future, to open this project again, go to File > Open > Project and select the .sln file
