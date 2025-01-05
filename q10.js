const R1=prompt("Enter the Radius of circul");
const R2=prompt("Enter the Radius of circul");
const Area1=3.14*R1*R1;
const Area2=3.14*R2*R2;
const circul1=2*3.14*R1;
const circul2=2*3.14*R2;

if(Area1>Area2)
    {
    console.log("True");
    }
    else if(circul1>circul2)
        {
        console.log("True");
        }
    else{
        console.log("False");
    }
