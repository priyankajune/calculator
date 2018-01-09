var user=prompt("Please Enter Your Name");
alert("Hii "+user+"\nLet us start!!");
var num1=prompt("Please insert any number to calculate")
var num2=prompt("Please insert any number to calculate with");
while(operation!=0)
{
var operation=prompt("Please select your operation number below\n1.Addition\n2.Substraction\n3.Multiplication\n4.Division\n0.Exit");

if(operation=="1")
{
alert("The result is "+(+num1 + +num2));
}
else
if(operation=="2")
{
alert("The result is "+(num1-num2));
}
else
if(operation=="3")
{
alert("The result is "+(num1*num2));
}
else
if(operation=="4")
{
alert("The result is "+(num1/num2));
}
else
{
if(operation=="0")
{
alert("Thanks for using CalcPD+ ");
}
else
{
alert("Please insert valid number");}
}

}
