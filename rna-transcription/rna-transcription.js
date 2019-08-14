var Strands = new Map([["C", "G"], ["G", "C"], ["A", "U"], ["T", "A"]] );
export const toRna = (input = "") =>  { 
  
 /* let rnavalue = [];
  [... input].forEach(character => {  rnavalue.push ( Strands.get(character) );   });
  return rnavalue.join("");  */

  
  let rnavalue = [];
  //input.split("").map(a => rnavalue.push ( Strands.get(a) ));
  input.split("").map(a => rnavalue.push ( Strands.get(a) ));
  return rnavalue.join("");








  /*[...input].forEach(char => {
    // do something
    console.log(char);
  });*/


    
    //rnavalue.push ( Strands.get(value) );
  }



//input.forEach ( test => console.log(test));




   /*
   let rnavalue = [];
   for (let value of input) {     
     rnavalue.push ( Strands.get(value) );     
  }
  return rnavalue.join("");  
  */




