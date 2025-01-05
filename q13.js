const p=prompt("Enter password");
if(p.length>=10)
{
for(let i=0;i<p.length;i++)
{
    if(p[i]=='A'||p[i]=='B'||p[i]=='C'||p[i]=='D'||p[i]=='E'||p[i]=='F'||p[i]=='G'||p[i]=='H'||p[i]=='I'||p[i]=='J'||p[i]=='K'||p[i]=='L'||p[i]=='M'||p[i]=='N'||p[i]=='O'||p[i]=='P'||p[i]=='Q'||p[i]=='R'||p[i]=='S'||p[i]=='T'||p[i]=='V'||p[i]=='W'||p[i]=='X'||p[i]=='Y'||p[i]=='Z')
    {
       for(let i=0;i<p.length;i++)
       {
        if(p[i]=='a'||p[i]=='b'||p[i]=='c'||p[i]=='d'||p[i]=='e'||p[i]=='f'||p[i]=='g'||p[i]=='h'||p[i]=='i'||p[i]=='j'||p[i]=='k'||p[i]=='l'||p[i]=='m'||p[i]=='n'||p[i]=='o'||p[i]=='p'||p[i]=='q'||p[i]=='r'||p[i]=='s'||p[i]=='t'||p[i]=='v'||p[i]=='w'||p[i]=='x'||p[i]=='y'||p[i]=='z')
         {
             
         for(let i=0;i<p.length;i++)
         {
            if(p[i]==1||p[i]==2||p[i]==3||p[i]==4||p[i]==5||p[i]==6||p[i]==7||p[i]==8||p[i]==9||p[i]==0)
            {
                for(let i=0;i<p.length;i++)
                {
                   if(p[i]=='@'||p[i]=='#'||p[i]=='!') 
                   {
                    console.log(true);
                   }
                   else{
                    console.log("Please put corect passwed"); 
                    return
                   }
                }
            }
            else{
                console.log("Please put corect passwed"); 
                return
            }
         }
         }
            else{
                console.log("Please put corect passwed");
                return 
            }
       }
    }
}
}
else{
    console.log("Please put corect passwed");
    return
}

