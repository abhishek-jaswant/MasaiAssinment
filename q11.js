const hight=prompt("Enter the hight of the triangle");
const base=prompt("Enter the base of the triangle");
const Area=(hight*base)/2;

if(hight>0&&base>0)
{
    console.log("The area of Triangle is :",Area);
}
else{
    console.log("Invalid number");
}