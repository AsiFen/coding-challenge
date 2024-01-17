function sumOfEvenNumbers(array_list) {
   let sum = 0;
    for (const number of array_list) {
        if (number % 2 === 0) {
            sum += number;
        }
    }
        return sum;
}

module.exports = { sumOfEvenNumbers} 
