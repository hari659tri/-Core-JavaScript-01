// function for geneating number 

function generateNumber(start,end) {
    for(let i=start+1;i<=end;i++){
        console.log(i);
    }
}


   const start= parseInt(prompt("enter the start number:"));
   const end= parseInt(prompt("enter the end number:"));
  const k= generateNumber(start,end);

console.log(`Generated Numbers: ${k.join(', ')}`);
