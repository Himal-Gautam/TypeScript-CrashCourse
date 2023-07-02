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
function render(document: any) {
  // explicitly have type any
  console.log(document);
}

// =================================================================
// ARRAYS
// =================================================================

// let numbers = [1, 2, '3']; // implicitly have type any[]
// let numbers : any[] = [1, 2, '3']; // explicitly have type any
let numbers: number[] = [1, 2, 3]; // implicitly have type any

// =================================================================
// TUPLES
// =================================================================

let user: [number, string] = [1, "Himal"];

// =================================================================
// ENUMS
// =================================================================

// enum Size {Small, Medium, Large} //{Small = 0, Medium = 1, Large = 2}
// enum Size {Small = 1 , Medium, Large} //{Small = 1, Medium = 2, Large = 3}
const enum Size {
  Small = 1,
  Medium,
  Large,
} //more optimised
// enum Size {Small = 's' , Medium = 'm', Large = 'l'} //declare for all sizes

let mySize: Size = Size.Medium;
console.log(mySize); //2

// =================================================================
// FUNCTIONS
// =================================================================

// function calculateTax(income: number) {} // return void
// function calculateTax(income: number){return 0;} //implicitly return type number
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 50_000) return income * 1.2;
  return income * 1.3;
} //explicitly return type number

calculateTax(10_000, 2022);

// =================================================================
// OBJECTS
// =================================================================

let employee: {
  readonly id: number; //cant be modified
  name: string;
  salary?: number; //optional
  retire: (date: Date) => void;
} =
  //{ id: 1 } // will give error
  {
    id: 1,
    name: "Himal",
    retire: (date: Date) => {
      console.log(date);
    },
  };
// employee.age = 21 //not allowed
// employee.id = 0 //will give error
employee.name = "Gautam";

// =================================================================
// TYPE ALIASES
// =================================================================

// -> DRY principle - Dont Repeat Yourself

type Employees = {
  readonly id: number;
  name: string;
  salary?: number;
  retire: (date: Date) => void;
}; //we can reuse this as a type

let employees: Employees = {
  id: 1,
  name: "Himal",
  retire: (date: Date) => {
    console.log(date);
  },
};

// =================================================================
// UNION TYPES
// =================================================================

function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    } else {
        return parseInt(weight) * 2.2;
    }
 }

kgToLbs(10)
kgToLbs('10kg')

// =================================================================
// INTERSECTION TYPES
// =================================================================

// example from previous one => weight: number & string

type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable 

let widget: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// =================================================================
// LITERAL TYPES
// =================================================================

// literal (exact, sepcific)

let quantity1: 50
quantity1 = 50 //correct
// quantity1: 50 = 51 //incorrect as we have set literal 50

let quantity2: 50 | 100 
quantity2 = 50 //correct
quantity2 = 100 //correct
// quantity2: 51 //incorrect as we have set literal 50 or 100

// perfect way
type Quantity = 50 | 100
let quantity3: Quantity
quantity3 = 50 //correct
quantity3 = 100 //correct
// quantity3: 51 //incorrect as we have set literal 50 or 100

type Metric = "cm" | "inch" //example
