function printMasaiSchool(L1,B1,L2,B2){
    var area1 = L1 * B1;
    var area2 = L2 * B2;
    var pramiter1 = 2 * (L1 + B1);
    var pramiter2 = 2 * (L2 + B2);
    if(area1 > area2){
        console.log("True");
    }else{
        console.log("false");
    }
   if(pramiter1 > pramiter2){
       console.log("True");
   }else{
       console.log("false");
   }
  
}
