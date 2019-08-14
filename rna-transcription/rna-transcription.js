var Strands = new Map();
Strands.set("C", "G" );
Strands.set("G", "C" );
Strands.set("A", "U" );
Strands.set("T", "A" );

export const toRna = (input = "") =>  { 
  
   let rnavalue = [];
   for (let value of input) {     
     rnavalue.push ( Strands.get(value) );     
  }
  return rnavalue.join("");  
}