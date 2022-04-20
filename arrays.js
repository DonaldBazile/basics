let cars = ['ferrari' , 'Lambo', 'Audi', 'Ford' , 'Toyota']

console.log(cars[1]) // Lambo
console.log(cars.length) // 5

let ourCars = [{
    brand: 'Audi',
    year: 2018, 
    model: 'A3',
    miles: 25580,
    color: 'Grey',
}, {
    brand: 'Jeep',
    year: 2015, 
    model: 'Grand',
    miles: 55000,
    color: 'red',
}]

console.log(ourCars[1].miles)

const {miles, year} = ourCars[0]

const age = 2022 = year
const milage = miles / age

console.log(milage + ' miles per year')

if (mileage < 1000) {
    console.log('This is LOW mileage car,') 
} else {
    console.log('This is Not a low  mileage car.')  
} 





