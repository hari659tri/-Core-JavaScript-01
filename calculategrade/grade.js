function calculategrade(marks){
    if(marks>90){
        console.log("A grade");
    }
   else if(marks>70&&marks<90){
        console.log("B grade");
    }
    else if(marks>50&&marks<70){
        console.log("C grade");
    }
    else {
        console.log("F grade");
    }
   }

   const ans=prompt("enter the marks:");
   calculategrade(ans);