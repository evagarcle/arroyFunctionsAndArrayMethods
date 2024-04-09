
// FUNCIONES FLECHA 

const saludar = () => 'hola'
console.log(saludar())

const division = (a,b) => a/b
console.log(division(10,2))

const miNombre = (nombre) => `Mi nombre es ${nombre}`
console.log(miNombre('Eva'))

const test2 = () => 'Función test 2 ejecutada.'
console.log(test2())

// const test1 = (callback) => {
//   callback()
// }
// console.log(test1())


// FOREACH

let gente = [ 
  {    nombre: "Jamiro",  edad: 45,  },
  {    nombre: "Juan",    edad: 35,  },
  {    nombre: "Paco",    edad: 34,  },
  {    nombre: "Pepe",    edad: 14,  },
  {    nombre: "Pilar",   edad: 24,  },
  {    nombre: "Laura",   edad: 24,  },
  {    nombre: "Jenny",   edad: 10,  },
];

let personGreater25 = []
gente.forEach(persona => {
  if (persona.edad > 25) {
    personGreater25.push(persona)
  }
})
console.log(personGreater25)

// ------------------------------------------------------

let personJ = []
let primeraLetra
gente.forEach(persona => {
  primeraLetra = persona.nombre.slice(0,1)
    if (primeraLetra === 'J') {
      personJ.push(persona)
  }
})
console.log(personJ)


// MAP// 

const greaterThan25 = gente.map((persona)=>{
  if (persona.edad >25) {
    return persona
  }  
})
console.log(greaterThan25)

// --------------------------------------------------------

let firstLetter 
const beginsWithJ = gente.map(persona => {
  firstLetter = persona.nombre.slice(0,1)
  if (firstLetter === 'J') {
    return persona
  }
})
console.log (beginsWithJ)

// -----------------------------------------------------------

const numbers = [ 4, 5, 6, 7, 8, 9, 10];

const numbersSelfElevated = numbers.map(number => {
  return number ** number
})

console.log(numbersSelfElevated)


// FILTER

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbers2.filter(number =>{
  return number % 2 != 0
})

console.log(impares)


// -----------------------------------------------------


const foodList = [
  { name: 'Tempeh', isVeggie: true },
  { name: 'Cheesbacon burguer', isVeggie: false },
  { name: 'Tofu burguer', isVeggie: true },
  { name: 'Entrecot', isVeggie: false }
]


const veganFood = foodList.filter(food => food.isVeggie === true)
const veganFoodPrases = veganFood.map(platoVegano => {
  return `Qué rico ${platoVegano.name} me voy a comer`
})
console.log(veganFoodPrases)


// REDUCE

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];

const multipliedNumbers = numeros.reduce((a,b) => a*b)
console.log(multipliedNumbers)







// EXTRAS






