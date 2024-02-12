// HERE I'LL SOLVE THE QUESTIONS BASED ON "OBJECTS". 

// Q1 - Create an object representing the car with properties like "make" , "model" and "year". Write a function to display all the properties of the car. 

const car = {

    make: "Toyota",
    model: "Supra",
    year: 1998

}

const displayProperties = () => {
    console.log(`Make - ${car.make}`);
    console.log(`Model - ${car.model}`);
    console.log(`Year - ${car.year}`);
}

displayProperties(car);

// // ---------------------------------------------------------------------------------------------------

// // Q2 - Define an object that represents the student information including name , age and grade implement a method to update the student's grade.

const student = {

    name: "owais",
    age: 21,
    grade: "C"
}

console.log(`Previous grade ${student.grade}`)

const updateGrade = (grade) => {

    student.grade = grade;
    console.log(` The grade is updated to - ${student.grade}`)

}

updateGrade("B");

// // ---------------------------------------------------------------------------------------------------

// // Q3 - Write a program that takes an object as input and returns the number of properties it have. 

const objj = {
    name: "owais",
    age: 25,
    gendre: "male"
}

const objCountProps = (obj) => {

    return Object.keys(obj).length;

}
console.log(` Number of properties - ${objCountProps(objj)}`);

// ---------------------------------------------------------------------------------------------------

// // Q4 - Write a program that takes an object as input and returns the number of properties it have. 

const checkObj = {
    name: "owais"
}

const check = (obj) => {

    return Object.hasOwn(checkObj, 'name');

}

console.log(`Is name exists in the above object ? -----> ${check(checkObj)}`)

// ---------------------------------------------------------------------------------------------------

// Q4 - Create an object representing a shopping cart with properties for items and quantities. Write methods to add an item, remove an item, and update the quantity of an item.

const shoppingCart = {

    items: {

        Apple: 10,
        Banana: 10

    },

    // function to add items .
    addItem: function (item, quantity) {

        if (this.items[item]) {

            // console.log(`Previous quantity of Apple is ${this.items[item]}`)
            this.items[item] += quantity;
            // console.log(`Update quantity of Apple is ${quantity}`)

        } else {

            this.items[item] = quantity;
        }
    },


    // Function to remove an item
    removeItem: function (...item) {
        if (this.items[item]) {
            delete this.items[item];
        } else {
            console.log(`This ${item} is not present`)
        }
    },

    // Function to update items
    updateItems: function (item, newQuantity) {

        if (this.items[item]) {

            this.items[item] = newQuantity;

        } else {

            console.log("The Item you want to Update does not exist");

        }

    }

}

shoppingCart.addItem("Apple", 5)
// shoppingCart.removeItem("Banana")
shoppingCart.updateItems("Banana", 20)
console.log(shoppingCart.items)

// ---------------------------------------------------------------------------------------------------

// Q5 - Create an object representing a person with properties for name, age, and address. Write a function to update the person's address.

const personDetails = {

    name: "Owais",
    age: 22,
    address: "Noida, Bihar 110069"

};

const updateAddress = (address) => {
    personDetails.address = address
}

console.log(`Before updating ${personDetails.address}`);
updateAddress("New Delhi, India 110074");
console.log(`After updating ${personDetails.address}`);

// ---------------------------------------------------------------------------------------------------

// Q6 - Write a function to rename a property in an object, allowing the user to specify the old and new property names.

const property = { 

    firstName : "owais",
    lastName : "ali",

}

const renameProperty = (obj, oldProp, newProp) => {

    if (obj.hasOwnProperty(oldProp)) {

        obj[newProp] = obj[oldProp];
        delete obj[oldProp];

    }else{

        console.log(`${oldProp} is not present`);

    }

}

renameProperty(property,"firstName","givenName")
console.log(property);

// ------------------------------------------------------------------------------------------------







