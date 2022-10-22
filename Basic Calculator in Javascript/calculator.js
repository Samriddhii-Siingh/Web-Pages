
function solve()
{
    var firstNumber, secondNumber, number1, number2, sum, diff, prod, div;

    firstNumber = window.prompt("Enter first integer", "0");
    secondNumber = window.prompt("Enter second integer", "0");
            
    number1 = parseInt(firstNumber);
    number2 = parseInt(secondNumber);

    var operator;
    operator = window.prompt("Enter the Operator\n+, - , *, / ");

    if(operator == '+')
    {
        sum = number1 + number2;
        document.writeln("<h1>The sum is " + sum + "</h1>");
    }
    else if(operator == '-')
    {
        diff = number1 - number2;
        document.writeln("<h1>The difference is " + diff + "</h1>");
    }
    else if(operator == '*')
    {
        prod = number1 * number2;
        document.writeln("<h1>The product is " + prod + "</h1>");
    }
    else if(operator == '/')
    {
        div = number1 / number2;
        document.writeln("<h1>The quotient is " + div + "</h1>");
    }

    else
        document.writeln("<h1>Invalid Operator</h1>");
}