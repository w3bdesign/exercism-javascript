var Strands = new Map([["C", "G"], ["G", "C"], ["A", "U"], ["T", "A"]] );
export const toRna = (input = "") =>  { 

 /* THIS SEEMS TO WORK TOO: */
 /*
 let rnavalue = [];
  [... input].forEach(character => {  rnavalue.push ( Strands.get(character) ); });
  return rnavalue.join("");  
  */
  
  let rnavalue = [];  
  input.split("").map(char => rnavalue.push ( Strands.get(char) ));
  return rnavalue.join("");  
  }