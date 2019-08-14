// [a, b] = [10, 20];

//console.log(a);
// expected output: 10


//export const Strands =  {  'C': 'G',  'G': 'C',  'A': 'U',  'T': 'A'};
var Strands = new Map();
Strands.set("C", "G" );
Strands.set("G", "C" );
Strands.set("A", "U" );
Strands.set("T", "A" );

export const toRna = (input = "") =>  { 

  //console.log("Verdi: " + input);
 // console.log ("Replace: " +  input.replace (input, Strands[input] ) );
  //console.log( "Object: " + Object.values(Strands));
  
  //console.log(input.length);
  //console.log( Strands.get()   );
   let test = [];
   for (let verdi of input) {
     //input.replace ( verdi, Strands.get(verdi));
    
     //console.log(Strands.get(verdi));
     test.push ( Strands.get(verdi) );





     //let test = verdi.replace ( verdi, Object.values(Strands));
     //console.log(test);
   // input.replace (verdi, Object.values(Strands) );
    //test.push(verdi);
    //console.log("Verdi: " + verdi);
    //console.log( Object.values(Strands));
   // console.log ( input.replace (verdi, Strands[verdi] ) );
   //return input;
  }
  return test.join("");




  //return input;
  //return Strands[input];
  //return String( input.replace (Strands[input], Object.values(Strands))) 
  //return "Input: " + Strands[input] + " Values: " + Object.values(Strands);
}
  
 // return 
  //{ return input.replace ( Strands[input],   "X" ) }



  //return String( Object.values(Strands[input]) ) 



//input.replace(Strands[input], Object.values(Strands))



//{ return input };



