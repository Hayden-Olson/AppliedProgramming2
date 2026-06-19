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
	case '√': return sqrt(b);
	}
	return 0;
}
void operation(stack<char>* operators, stack<double>* operands) {
	char op = operators->top();
	operators->pop();
	double b = operands->top();
	operands->pop();
	double result;
	if (op == '/' && b == 0) {
		throw invalid_argument("Division by zero");
	}
	else if (op == '^' && operands->top() == 0 && b < 0) {
		throw invalid_argument("Zero cannot be raised to a negative power");
	}
	else if (op == '^' && operands->top() < 0 && b != floor(b)) {
		throw invalid_argument("Negative base cannot be raised to a non-integer power");
	}
	else if (operands->size() == 0) {
		result = -b;
		operands->push(result);
		return;
	}
	double a = operands->top();
	operands->pop();
	result = applyOperator(a, b, op);
	operands->push(result);
	return;
}
double translate(string input) {
	stack<char> operators;
	stack<double> operands;
	for (int i = 0; i < input.length(); i++) {
		if (isdigit(input[i]) || input[i] == '.') {
			double num = 0;
			while (i < input.length() && isdigit(input[i])) {
				num = num * 10 + (input[i] - '0');
				i++;
			}
			operands.push(num);
			i--;
		}
		// Detect unary minus: at start, or after '(' or an operator
		else if (input[i] == '-' && (i == 0 || input[i - 1] == '(' ||
			input[i - 1] == '+' || input[i - 1] == '-' ||
			input[i - 1] == '*' || input[i - 1] == '/' || 
			input[i - 1] == '^' || input[i - 1] == '√')) {
			// Push 0 so the subtraction becomes (0 - x)
			operands.push(0);
			operators.push('-');
		}
		else if (input[i] == '+' || input[i] == '-' || input[i] == '*' ||
			input[i] == '/' || input[i] == '^') {
			// Fix right-associativity for ^
			while (operators.size() > 0 &&
				(input[i] == '^' ? precedence(operators.top()) > precedence(input[i])
					: precedence(operators.top()) >= precedence(input[i]))) {
				operation(&operators, &operands);
			}
			operators.push(input[i]);
		}
		else if (input[i] == '(' || '√') {
			operators.push(input[i]);
		}
		else if (input[i] == ')') {
			while (operators.size() > 0 && operators.top() != '(') {
				operation(&operators, &operands);
			}
			if (operators.size() > 0) operators.pop();
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
	while (input != "quit") {
		cout << "Enter an expression ('help' for help): ";
		getline(cin,input);
		if (input == "quit") {
			break;
		}
		else if (input == "help") {
			cout << "Supported operations: +, -, *, /, ^, parentheses" << endl;
			cout << "Examples: 3 + 4 * 2, (1 + 2) ^ 3, -5 + 6" << endl;
			cout << "Note: Use 'quit' to exit the program." << endl;
			cout << "Note: Unary minus is supported, e.g. -5 or 3 * -2." << endl;
			cout << "Note: Division by zero and invalid exponentiation will result in an error." << endl;
			cout << "Note: The calculator does not support variables or functions." << endl;
			cout << "Note: PEMDAS order is followed: parentheses > exponentiation > multiplication/division > addition/subtraction." << endl;
			cout << "Note: For square root, hold alt and type 251 (√) or use the ^ operator with 0.5, e.g. 9^(0.5) for √9." << endl;
			continue;
		}
		try {
			cout << "Result: " << translate(input) << endl;
		}
		catch (const invalid_argument& e){
			cout << "Error: " << e.what() << endl;
		}
	}

    return 0;
}
