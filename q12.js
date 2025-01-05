let arr=[20,30,50,95,92,55,43,62,67,72];
let count =0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]<40)
    {
        arr[i]+=20;
    }
    if(arr[i]>90)
    {
        arr[i]=90;
    }
    if(arr[i]>=50)
    {
        count++;
    }
}
console.log(arr);
console.log("Passed Student: ",count);