const fullnames = ["Juan Dela Cruz", "Pedro Penduko", "Tigang Akyat"]

const students = [
    {
        name: fullnames[0], 
        age: 20, 
        course: 'BSIT'
    },
    {
        name: fullnames[1], 
        age: 21, 
        course: 'BSIT'
    },
    {
        name: fullnames[2], 
        age: 22, 
        course: 'BSIT'
    },
]

// console.log(students) 

const hello = function(name = "Carlo") {
    return (`Hello ${name}`)
}

module.exports = {students, fullnames, hello}