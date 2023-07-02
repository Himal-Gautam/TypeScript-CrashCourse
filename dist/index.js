"use strict";
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, "Himal"];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 50000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
let employee = {
    id: 1,
    name: "Himal",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Gautam";
let employees = {
    id: 1,
    name: "Himal",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=index.js.map