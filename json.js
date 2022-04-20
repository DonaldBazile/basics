let car = {
    brand: 'Audi',
    year: 2018, 
    model: 'A3',
    miles: 25580,
    color: 'Grey',
}

console.log(car)

const carjson = json.stringify(car) 

console.log(carjson)

const carParsed = json.parse(carjson)

console.log(carParsed)
