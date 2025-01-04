let arr = [15, 17, 18, 20, 15, 21, 22];

for (let i = 0; i < arr.length; i++)
     { 

 // Changed condition to include the last element

          if (i == 4)
         {
           arr[i] = arr[i] + 2;
         }
        console.log(arr[i]);
     }