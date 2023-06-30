// =================================================================
// BUILT-IN DATA TYPES
// =================================================================

let sales = 123_456_789; //auto detect type number
let course: string = "TypeScript";
let is_published: boolean = true;

// =================================================================
// "ANY" DATA TYPE
// =================================================================

let level; //type any
level = 1;
level = "a"; //not give errors

// function render(document) { // implicitly have type any
function render(document: any) { // explicitly have type any
  console.log(document);
}

// =================================================================
// ARRAYS
// =================================================================

// let numbers = [1, 2, '3']; // implicitly have type any[]
// let numbers : any[] = [1, 2, '3']; // explicitly have type any
let numbers : number[] = [1, 2, 3]; // implicitly have type any

// =================================================================
// TUPLES
// =================================================================

let user: [number, string] = [1, 'Himal'];