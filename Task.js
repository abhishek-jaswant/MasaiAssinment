let arr=["maditation","work","play","eat","sleep"];
let temp=["brakfast"]
 arr[0]="wakeup";
for(let i=0;i<arr.length;i++)
{
    temp[temp.length]=arr[i];

}
for(let i=0;i<temp.length;i++)
{
    arr[i]=temp[i];
    
}
arr[arr.length-1]="playsong";
console.log(arr)
