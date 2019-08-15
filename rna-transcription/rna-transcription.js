const Strands = new Map([["C", "G"], ["G", "C"], ["A", "U"], ["T", "A"]] );
    export const toRna = (input = "") =>  {
        return ([... input].map( char =>  Strands.get(char)).join(""));
    }