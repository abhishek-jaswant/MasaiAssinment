const fuel=prompt("Enter the fuel in litres");
const distance=prompt("Enter the distance in km");
let requed=fuel*distance;
if (requed>50){
    console.log("The fuel is enough");
}
else{
    console.log("The fuel is not enough");
}