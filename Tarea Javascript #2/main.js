// Define una clase Coche que tenga propiedades para marca, modelo y año.
class coche{
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year
    }
}
let coche1 = new coche("Bugatti","Chiron Grand Sport",2018)
console.log(coche1)

// Escribe una función que tome un array de nombres y los transforme a mayúsculas.
function mayuscula(list) {
    let newArray = []
    for (let i = 0; i < list.length; i++) {
        newArray.push(list[i].toUpperCase())
    }
    console.log(newArray)
}
let names = ["luis","emilio","ericka"]
mayuscula(names)

// Crea una función que reciba un arreglo de números y devuelva un nuevo arreglo que solo contenga los números mayores que 10.
function Mayores_a_10(list){
    let newArray = []
    for (let i = 0; i < list.length; i++) {
        if (list[i] > 10 ) {
            newArray.push(list[i])
        }
    }
    console.log(newArray);
}
let numbersArray = [23,43,12,2,34,21,6,5,78,4]
Mayores_a_10(numbersArray)


// Escribe una función que imprima los primeros 10 números naturales usando un bucle while.
function printNumbers() {
    let naturalNumbers = []
    let num = 1
    while(num > 0 && num <= 10){
        naturalNumbers.push(num)
        num++
    }
    console.log(naturalNumbers)
}
printNumbers()


// Utiliza filter y map para encontrar todos los números en un arreglo que sean mayores que 10 y luego multiplícalos por 2.
let numbersArray2 = [23,43,12,2,34,21,6,5,78,4]
function numeros_mayor_a_10(num) {
    return num > 10
}
const mayores_a_10 = numbersArray2.filter(numeros_mayor_a_10)
console.log(mayores_a_10)

function multiplicacion(num) {
    return num * 2
}
const multiplicar = numbersArray2.map(multiplicacion)
console.log(multiplicar)


// Implementa una función que recorra una lista hasta encontrar el número 0, momento en el que el bucle deberá terminar.
function detener_en_0(list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] == 0) {
            console.log(`El numero 0 se lo encontro en la posicion ${i}`)
            break
        }
    }
}
let numbers = [1,2,3,4,0,5,6,0]
detener_en_0(numbers)



// Crea una clase Persona que tenga propiedades para nombre, edad y un método que devuelva una descripción básica de la persona.
class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    basicDescription(){
        return `Mi nombre es ${this.name} y tengo ${this.age} años`
    }
}
let person1 = new person("Luis",19)
console.log(person1.basicDescription())

let person2 = new person("Veronica",15)
console.log(person2.basicDescription())


// Define una clase Libro con propiedades para título, autor, y año. Agrega un método que devuelva un string con el título y el autor del libro.
class book{
    constructor(title,author,year){
        this.title = title
        this.author = author
        this.year = year
    }
    bookDescription(){
        return `El titulo del libro es ${this.title} y su autor es ${this.author}`
    }
}
let book1 = new  book("Las estrellas que perdimos","Zela Brambille",2023)
console.log(book1.bookDescription())


// En la clase CuentaBancaria, añade propiedades privadas para titular y saldo. Usa getters y setters para modificar el saldo
class CuentaBancaria{
    #holder
    #balance
    constructor(holder,balance){
        this.#holder = holder
        this.#balance = balance
    }
    get holder(){
        return this.#holder
    }
    set holder(newHolder){
        this.#holder =  newHolder
    }
    get balance(){
        return this.#balance
    }
    set balance(newBalance){
        this.#balance = newBalance
    }
}
let CuentaBancaria2 = new  CuentaBancaria("Luis Arguello",500000)
console.log(CuentaBancaria2.holder)
console.log(CuentaBancaria2.balance)

//Valor del saldo cambiado
CuentaBancaria2.balance = 1000000
console.log(CuentaBancaria2.balance) 


// Crea una clase Utilidad que tenga un método estático que convierta grados Celsius a Fahrenheit.
class utilidad{
     static convert(grados_celsius){
        let Fahrenheit = (grados_celsius * 1.8) + 32
        console.log(Fahrenheit)
    }
}
utilidad.convert(50)


// Define una clase Empleado que herede de la clase Persona y añade una propiedad salario
class empleado extends person{
    constructor(name,age,wage){
        super(name,age)
        this.wage = wage
    }
}
let empleado1 = new empleado("Luis","Arguello",5400)
console.log(empleado1)


// Implementa una clase Coche que encapsule las propiedades marca, modelo, y kilometraje y prevenga el acceso directo a kilometraje.
class auto{
    constructor(brand,model,mileage){
        this._brand = brand
        this._model = model
        this._mileage = mileage
    }

    get brand(){
        return this._brand
    }
    set brand(newBrand){
        return this._brand = newBrand
    }

    get model(){
        return this._model
    }
    set model(newModel){
        return this._model = newModel
    }

    get mileage(){
        return this._mileage 
    }
    set mileage(newMileage){
        if (newMileage < this._mileage) {
            console.log(`Error`)
        }else{
            return this._mileage = newMileage
        }
    }
}
let  auto1 = new auto("Lamborghini","SVJ",350)
console.log(auto1)

auto1.mileage = 300
console.log(auto1.mileage)



// Crea una clase Tienda que contenga un array de objetos de la clase Producto. Implementa métodos para añadir, remover y buscar productos.
class producto1{
    constructor(id,name,price){
        this._id = id
        this._name = name
        this._price = price
    }
    get id(){
        return this._id
    }
    set id(newId){
        if (newId < 0) {
            console.log("Error")
        }else{
            this._id = newId
        }
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName.charAt(0).toUpperCase() + newName.slice(1)
    }

    get price(){
        return this.price
    }
    set price(newPrice){
        if (newPrice < 0) {
            console.log("Error")
        }else{
            this._price = newPrice
        }
    }

}
class tienda{
    constructor(){
        this.productos = []
    }
    //anardir productos
    anadirProducto(producto){
        this.productos.push(producto)
    }
    //remover producto
    removerProducto(id){
        this.productos = this.productos.filter(producto => producto.id !== id)
    }
    //buscar producto
    buscarProducto(id){
        return this.productos = this.productos.find(producto => producto.id == id)
    }
}
//inicializamos la tienda
let tienda1 = new tienda()

//colocamos los  productos
let product_1 = new producto1(1,"atun",1.80)
let product_2 = new producto1(2,"aceite",1.00)
let product_3 = new producto1(3,"mayonesa",0.50)
let product_4 = new producto1(4,"salsa de tomate",0.60)

product_4.id = -1
console.log(product_4)

product_4.price = 0.2
console.log(product_4)

//colocamos estos productos en tienda
tienda1.anadirProducto(product_1)
tienda1.anadirProducto(product_2)
tienda1.anadirProducto(product_3)
tienda1.anadirProducto(product_4)


console.log(tienda1)

//removemos un producto
tienda1.removerProducto(2)
console.log(tienda1)

//buscamos un producto
id_buscar = 2
productoBuscado = tienda1.buscarProducto(id_buscar)
console.log(productoBuscado)



// En la clase Usuario, permite que se añadan propiedades dinámicas que no están definidas en el constructor como hobbies o intereses.
class usuario{
    constructor(name,contrasela,gmail){
        this.name = name
        this.contrasela = contrasela
        this.gmail = gmail
    }
    añadir(propiedad,valor){
        this[propiedad] = valor
    }
}
let usuario1 = new usuario("Luis Arguello",5531,"luisarguello5531@gmail.com")
console.log(usuario1)

usuario1.añadir("hobbis","Gym")
usuario1.añadir("interes","Tecnologia")

console.log(usuario1)


// Define una clase Configuracion donde ciertas propiedades como nombreDeUsuario no puedan modificarse después de ser inicializadas
class configuacion{
    constructor(nombreUsuario,contrasela){
        this._nombreUsuario = nombreUsuario
        this._contrasela = contrasela
    }
    get nombreUsuario(){
        return this._nombreUsuario
    }
    set nombreUsuario(newNombreUsuario){
        console.log("Error no puedes modificar el nombre de usuario")
        this._nombreUsuario = this.nombreUsuario
    }
    get contrasela(){
        return this._contrasela
    }
    set contrasela(newContrasela){
        //comprobamos que la contrasela sea solo numeros y solo 4 digitos
        if (typeof newContrasela === 'number' && newContrasela >= 1000 && newContrasela <= 9999) {
            this._contrasela = newContrasela 
        }else{
            console.log("Ingrese una contrasela solo con numeros")
        }
    }
}
let usuario_1 = new configuacion("Luis Arguello",3456) 

console.log(usuario_1)

usuario_1.nombreUsuario = "Emilio Arguello"
console.log(usuario_1)

usuario_1.contrasela = 9531
console.log(usuario_1)


// En la clase Persona, asegura que la edad no pueda ser menor que 0 ni mayor que 120 usando setters.
class Person_0{
    constructor(name,lastname,age){
        this._name = name
        this._lastname = lastname
        this._age = age
    }
    get name(){
        return this._name
    }
    set name(newName){
        this._name = newName
    }
    get lastname(){
        return this._lastname
    }
    set lastname(newLastname){
        this._lastname = newLastname
    }
    get age(){
        return this._age
    }
    set age(newAge){
        if (newAge > 0 && newAge < 120 ) {
            this._age = newAge
        } else {
            console.log("Ingrese una edad valida")
        }
    }
}
let person_1 = new Person_0("Luis","Arguello",19)
console.log(person_1)

person_1.age = 21
console.log(person_1)


// Implementa una clase Cadena que tenga métodos para contar número de vocales, invertir la cadena, y verificar si es un palíndromo.
class Cadena{
    constructor(frase){
        this.frase = frase
    }
    contar_vocales(){
        let vocales = ["a","e","i","o","u","A","E","I","O","U"]
        let contador = 0

        for (let i = 0; i < this.frase.length; i++) {
            if (vocales.includes(this.frase[i])) {
                contador++
            }
        }
        return contador
    }
    invertir_cadena(){
        return this.frase.split("").reverse().join("")
    }
    palindroma(){
        let invertirCadena = this.invertir_cadena()
        return this.frase == invertirCadena
    }
}

let frase_1 = new Cadena("ana")

console.log(frase_1.contar_vocales())
console.log(frase_1.invertir_cadena())
console.log(frase_1.palindroma())

// Implementa la clase Calculadora de modo que se puedan encadenar métodos como sumar, restar, etc
class Calculadora{
    constructor(firstNumber,secondNumber){
        this.firstNumber = firstNumber
        this.secondNumber = secondNumber
    }
    suma(){
        let sumar = this.firstNumber + this.secondNumber
        return sumar
    }
    resta(){
        let restar = this.firstNumber - this.secondNumber 
        return restar
    }
    multiplicacion(){
        let multiplicar = this.firstNumber * this.secondNumber
        return multiplicar
    }
    division(){
        let dividir = this.firstNumber / this.secondNumber
        return dividir
    }
}

let operacion_1 = new Calculadora(4,2)

console.log(operacion_1.suma())
console.log(operacion_1.resta());
console.log(operacion_1.multiplicacion());
console.log(operacion_1.division())