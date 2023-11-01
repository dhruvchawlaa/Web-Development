/* 
=== -> Equal to
!== -> Not equal to
>   -> Greater than
<   -> Less than
>=  -> Greater than or equal
<=  -> Lesser than or equal
&&  -> And
||  -> Or
*/

// Example 1
var a = 5;
var b = "5";

// This says "EQUAL"
if (a == b) {  // checks the data and not the data type
    console.log("EQUAL");
} else {
    console.log("NOT EQUAL");
}

// Example 2

// This says "NOT EQUAL"
if (a === b) {  // checks both data and data type
    console.log("EQUAL");
} else {
    console.log("NOT EQUAL");
}

// Combining comparators
if (a>3 && b==5){
    console.log("Operators have been combined!");
} else {
    console.log("Operators have not been combined!");
}
