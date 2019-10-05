var user=prompt("Please Enter Your Name");
alert("Hii "+user+"\nLet us start!!");
while(operation!="q")
{
var num1=prompt("Please insert any number to calculate")
//Putting operation in between numbers is more convenient and interactive
var operation=prompt("Please select your operation below\n1.Addition => +\n2.Substraction => - \n3.Multiplication => * \n4.Division => /\n0.Exit => q");

var num2=prompt("Please insert any number to calculate with");

if(operation=="+")//addition
{
alert("The result is "+(+num1 + +num2));
}
else
if(operation=="-")//subtraction
{
alert("The result is "+(num1-num2));
}
else
if(operation=="*")//multiplication
{
alert("The result is "+(num1*num2));
}
else
if(operation=="/")//division
{
alert("The result is "+(num1/num2));
}
else
{
if(operation=="q")//quit
{
alert("Thanks for using CalcPD+ ");
}
else//invalid input in operation
{
alert("Please insert valid number");}
}
}
