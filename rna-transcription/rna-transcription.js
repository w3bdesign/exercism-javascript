const Strands = new Map([["C", "G"], ["G", "C"], ["A", "U"], ["T", "A"]] );
export const toRna = (input = "") =>  { 
const x = [... input].map( char =>  Strands.get(char) );
return x.join("");
}