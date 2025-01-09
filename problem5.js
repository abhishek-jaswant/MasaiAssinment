
let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]]
let bar=" ";

for(let i=arr.length-1;i>=0;i--)
{
    bar+=arr[i][0]+" ";
}

   for(j=1;j<arr.length;j++)
   {
        bar+=arr[0][j]+" ";
   }
   for(let i=1;i<arr.length-1;i++)
{
    bar+=arr[i][arr.length-1]+" ";
}
for(let i=arr.length-1;i>=1;i--)
{
    bar+=arr[2][i]+" "
}
   
console.log(bar)