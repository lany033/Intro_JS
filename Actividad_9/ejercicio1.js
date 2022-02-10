/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
// 1. Muestra en pantalla el valor de la propiedad name mediante dot notation

console.log(student.name)

//2. Muestra en pantalla el valor de la propiedad age mediante bracket notation

console.log(student['age'])

//3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"

student.name = "Steve Jobs"
console.log(student.name)