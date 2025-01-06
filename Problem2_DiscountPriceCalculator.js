const price=prompt("Enter the price");
const descount=(10*price)/100;

if(price>20)
{
    let final_price=price-descount;
    console.log("the Final price of  a product: ",final_price);
}
else{
    console.log("you can't take decount: ");
}