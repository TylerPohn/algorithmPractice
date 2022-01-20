/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: */
//console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true],
//                                                   ['barney', 40, false]]
type Item = string | number | boolean;
// type transposeFunction = (a: Item[]) => Item[];

function matrixTranspose<Type>(arr: Type[]): Type | undefined {
  return arr;
}