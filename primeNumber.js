let a=3;
let b=20;
let p=0;
for(let i=a;i<=20;i++)
{
   let m= prime(i);
    if(m==true)
    {
        console.log(i);
    }

}


function prime( a)
{
    let count=0;
  for(let i=2;i<=a;i++)

  {
    if(a%i==0)
    {
     return false;
    }
    else{
        return true;
    }
  }


}