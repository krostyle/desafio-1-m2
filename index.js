//=============Inicio Programa==========

//=============Ejercicio 1=============

//Descripción ejercicio 1
alert("Ejercicio N°1")
alert(`
Realizar operaciones con dos números. Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos números, calcular lo siguiente:
● Suma
● Resta
● División
● Multiplicación
● Módulo
`)

//Definición de la función Suma
const Suma = (num1, num2) => {
        return (`El resultado de la suma es: ${num1+num2}`);
    }
    //Definición de la función Resta
const Resta = (num1, num2) => {
        return (`El resultado de la resta es: ${num1-num2}`);
    }
    //Definición de la función División
const Division = (num1, num2) => {
        return (`El resultado de la división es: ${num1/num2}`);
    }
    //Definición de la función Multiplicación
const Multiplicacion = (num1, num2) => {
        return (`El resultado de la multiplicación es: ${num1*num2}`);
    }
    //Definición de la función Módulo
const Modulo = (num1, num2) => {
    return (`El resultado del módulo es: ${num1%num2}`);
}

//Función para validar la entrada de datos del Ejercicio 1
const validate = (exp, regex) => {
    const re = new RegExp(`${regex}`, 'g')
    let flag = false;
    let num = 0;
    do {
        num = prompt(exp);
        flag = re.test(num);
    } while (!flag)
    return parseFloat(num)
}



//Se define expresión regular para validar los datos de entrada
const regexEj1 = '^(0*[1-9][0-9]*(\\.[0-9]+)?|0+\\.[0-9]*[1-9][0-9]*)$'

//Se definen las constantes n1 y n2, que el usuario ingresa mediante el método prompt()
const n1 = validate('Ingrese el valor del primer numero, se validará si el valor ingresado corresponde a un numero , recuerde que debe ser un numero mayor 0', regexEj1)
const n2 = validate('Ingrese el valor del segundo numero, se validará si el valor ingresado corresponde a un numero , recuerde que debe ser un numero mayor 0', regexEj1)

//Se muestran por consola los resultados de las diferentes funciones
console.log(Suma(n1, n2))
console.log(Resta(n1, n2))
console.log(Division(n1, n2))
console.log(Multiplicacion(n1, n2))
console.log(Modulo(n1, n2))



//==========EJERCICIO 2======================
alert('Ejercicio 2')

//Descripción Ejercicio 2
alert(`
Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
`)

//Se define función para transformar grados Celsius a Kelvin
const celsiusToKelvin = (celsius) => {
    return `La temperatura en grados Kelvin es de : ${celsius + 273.15}`
}

//Se define función para transformar grados Celsius a Fahrenheit
const celsiusToFahrenheit = (celsius) => {
    return `La temperatura en grado Fahrenheit es de : ${(celsius * 9 / 5) + 32}`
}

//Se define expresión regular para validar los datos de entrada
const regexEj2 = '^[+-]?([0-9]*[1-9][0-9]*(\\.[0-9]+)?|[0]+\\.[0-9]*[1-9][0-9]*)$'

//Se definen las constantes celsius, que el usuario ingresa mediante el método prompt()
const celsius = validate("Ingrese la temperatura en grados Celsius, debe ingresar un valor diferente de 0", regexEj2)

//Se muestran las conversiones por consola.
console.log(`${celsiusToKelvin(celsius)} K`)
console.log(`${celsiusToFahrenheit(celsius)} °F`)

//===========Ejercicio 3 ==================
alert('Ejercicio N°3')

//Descripción Ejercicio 3
alert(`
Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.
`)

//Definición de la función para obtener los años, meses y días
const yearsWeeksDays = (daysValue) => {
    const years = Math.floor(daysValue / 365);
    const weeks = Math.floor((daysValue % 365) / 7)
    const days = (daysValue % 365) % 7

    return `La cantidad de días ingresado corresponden a ${years} año(s) ${weeks} semana(s) y ${days} día(s)`
}

//Se define expresión regular para validar los datos de entrada
const regexEj3 = '^[1-9][0-9]*$';

//Se define la cantidad de días
const days = validate('Ingrese una cantidad de días', regexEj3);

//Se muestran por consola la conversión de días a años, semanas y días
console.log(yearsWeeksDays(days));

//================Ejercicio 4================
alert('Ejercicio N°4')

alert(`
Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados.  
`)

//Se define array vacío
const numArray = [];

//Se define función para sumar todos los números del array
const sumArray = (array) => {
    let suma = 0;
    array.forEach((numero) => {
        suma += numero;
    });
    return suma;
}

//Se define función para calcular el promedio
const promArray = (array) => {
    const suma = sumArray(array);
    const prom = suma / array.length;
    return prom;
}

//Se crea ciclo for para ir consultando los números
for (let i = 1; i <= 5; i++) {
    const num = validate(`Ingrese el valor N° ${i}`, regexEj1)
    numArray.push(num);
}

console.log(`La suma de los números es : ${sumArray(numArray)}`);
console.log(`El promedio de los números es : ${promArray(numArray)}`);

alert('Todos los resultados se mostrarán en la Consola.');

//===========Fin del Programa==============