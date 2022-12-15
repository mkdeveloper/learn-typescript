let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
let array3 : number[] = [];//correct syntax to define an empty array

let array4: number[] = new number[2];//error

let array5: number[] = [];
array5.push(1234);//dynamically adding

// Mixed array
let array6: (number | string)[] = [];
array6 = [1, 2, 3, 4];
array6 = ["This", "is", "a", "string"];
array6 = [1, 2, 3, 4, "This", "is", "a", "string"];

// Union
let array7: number[] | string[]; //This array can either be array of number or array of string
array7 = [1, 2, 3, 4];
array7 = ["Sir", "Zia"];
// array7 = [1,2,3, "Sir", "Zial"]; // Typescript will complain and won't allow it.

// Defining Array
let array8: [] = []; //But this array will always be empty, it can never have anything.
// array8 = [1, 2, 3];
// array8 = ["sir", "zia"]; //Typescript won't allow it, as at type specification, it was infered as an empty array.


