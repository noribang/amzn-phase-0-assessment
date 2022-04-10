// 1. Write your functions here

/* Code Challenge:
   -Create an empty Array.
   -takeANumber() function will add people to the line and will log their current position in line.
   -line() function will log who is line and their position in the line.
   -nowServing() function will log the current person being served. 
*/

/* ARRAY */
const katzDeli = []

/* #1 takeANumber() function 
input: array
output: logs welcome message to new customer in line with their position in line
side-effect: adds new customer to array
*/
// takeANumber() function takes 2 arguments: an array and a string for the new customer in line
// Add string new customer to the array.
// Log string new customer in format: Welcome, new customer. You are number array position + 1 in line.

function takeANumber(katzDeli, customer) {
    // const arrayPosition = katzDeli.length
    const customerPosition = katzDeli.length + 1
    // Add string new customer to the array.
    /* 1st expression used to add new customer in line. */
    // katzDeli[arrayPosition] = customer
    /* REFACTORED */
    katzDeli.push(customer)
    // Log string new customer in format: Welcome, new customer. You are number array position + 1 in line.
    const message = "Welcome, " + customer + ". You are number " + customerPosition + " in line."
    console.log(message)
}

// takeANumber(katzDeli, "Ada")
// takeANumber(katzDeli, "David")

/* #2 line() function 
input: array
output: returns a string containing everyone with their current place in the line
side-effect: --
*/

// Takes in an array as a parameter.
// If array length is 0, log "The line is currently empty."
// If there are 1 or more elements in the array log each element
// in this format: "The line is currently: 1. first element 2. second element 3. third element, etc."
function line(katzDeli) {
    // Takes in an array as a parameter.
    // If array length is 0, log "The line is currently empty."
    // Create customers string variable to hold accumulating string of customers.
    // If there are 1 or more elements in the array, iterate through the array.
    // Add each string element to customers variable.
    // Log customers string varaible.
    let customers = "The line is currently: "
    if (katzDeli.length === 0) {
        customers = "The line is currently empty."
        console.log(customers)
        return customers
    } else {
        for (let i = 0; i < katzDeli.length; i++) {
            if (i === katzDeli.length - 1) {
                customers += i + 1 + "." + " " + katzDeli[i]
            } else {
                // console.log(katzDeli[i])
                customers += i + 1 + "." + " " + katzDeli[i] + " "
            }
        }
    }
    console.log(customers)
    return customers
}

// console.log(line(katzDeli))

/* #3 nowServing() function 
input: none
output: should call out (i.e. console.log()) the next person in line in format "Currently serving " + array element at position 0 + "."
        e.g."Currently serving Ada."
        if nobody is in line log "There is nobody waiting to be served!" if there is nobody in line
side-effect: remove current customer beging served from the position 0 of the array
*/

// If array is empty log "There is nobody waiting to be served!"
// If array has >= 1 elements log "Currently serving " + array element at position 0 + "."
// Delete element at position 0.
function nowServing() {
    if (katzDeli.length === 0) {
        console.log("There is nobody waiting to be served!")
    } else {
        const nextPersonInLine = katzDeli[0]
        console.log("Currently serving " + nextPersonInLine  + ".")
        katzDeli.shift()
        // console.log(katzDeli)
    }
}

// nowServing()
// nowServing()
// nowServing()
// nowServing()
// nowServing()
// nowServing()


// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"