// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.
//


// The filter method takes a function as an argument. This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.

//example 1

const numbers = [1, 2, 3, 4, 20, 1928, 298];

const sorteradeNummer = numbers.filter(sorteraNummer);

function sorteraNummer(number) {
    if (number > 100) {
        return true;
    }
}
console.log('new array:', sorteradeNummer);
console.log(numbers);

//example 2

/* const filterdNumber = numbers.filter((number)=> {
    if(number % 2 ===0){
    }
}) */
const filteredNumbersTwo = numbers.filter(sorteraNummertvå);
function sorteraNummertvå(number) {
    if (number % 2 === 0) {
        return true;
    }
}
console.log('kaka', sorteraNummertvå);