
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

/* Resultado esperado
    [
      'Pepe es TheBoss y le gusta leer y ver pelis',
      'Ana es becaria y le gusta nadar y bailar',
      'Luis es programador y le gusta dormir y comprar',
      'Ana es becaria y le gusta nadar y bailar',
      'Carlos es secretario y le gusta fútbol y queso'
    ]
*/

const staff = [
  {    name: "Pepe",    role: "The Boss",    hobbies: ["leer", "ver pelis"],  },
  {    name: "Ana",    role: "becaria",    hobbies: ["nadar", "bailar"],  },
  {    name: "Luis",    role: "programador",    hobbies: ["dormir", "comprar"],  },
  {    name: "Carlos",    role: "secretario",    hobbies: ["futbol", "queso"],  },
];

const phrases = staff.map(cadaStaff => {
  return `${cadaStaff.name} es ${cadaStaff.role} y le gusta ${cadaStaff.hobbies[0]} y ${cadaStaff.hobbies[1]}`
})

console.log(phrases)



// --------------------------------------------------------

const foodList2 = ["Pizza", "Ramen", "Paella", "Entrecot"];

const newArray = []

const arraySentences = [ 'Como soy de Italia, amo comer ',
'Como soy de Japón, amo comer ',
'Como soy de Valencia, amo comer ',
'Aunque no como carne, el Entrecot es '
]

let i = 0

const foodList2phrases = foodList2.forEach((dish) =>{
  
  newArray.push(arraySentences[i] + dish)
  i++
  

  // if(dish === 'Pizza'){
  //  newArray.push(`Como soy de Italia, amo comer ${dish}`)
  // } else if (dish === 'Ramen'){
  //   newArray.push(`Como soy de Japón, amo comer ${dish}`)
  // } else if (dish === 'Paella'){
  //   newArray.push(`Como soy de Valencia, amo comer ${dish}`)
  // } else if (dish === 'Entrecot'){
  //   newArray.push(`Aunque no como carne, el ${dish} es sabroso`)
  // }
})

console.log(newArray)


// -----------------------------------------------------------

const foodList3 = ["Pizza", "Ramen", "Paella", "Entrecot"];

