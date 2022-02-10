function park_charges (){
  const hours = prompt("enter your hours")
 if(hours<=3){
  return "your pay is $2"
 }
 else if(hours === "24"){
   return "your pay is $10"
} 
 else if(hours<24){
     return 2+((hours-3)*0.5)
 }
 
 }

