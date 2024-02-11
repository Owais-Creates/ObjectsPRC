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

// ---------------------------------------------------------------------------------------------------

// Q2 - Define an object that represents the student information including name , age and grade implement a method to update the student's grade.

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

// ---------------------------------------------------------------------------------------------------

// Q3 - Write a program that takes an object as input and returns the number of properties it have. 

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

// Q4 - Write a program that takes an object as input and returns the number of properties it have. 

const checkObj = {
    name : "owais"
}

const check = (obj) => {

    return Object.hasOwn(checkObj, 'name');

}

console.log(`Is name exists in the above object ? -----> ${check(checkObj)}`)



