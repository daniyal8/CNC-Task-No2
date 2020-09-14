// localStorage.setItem('myobj', {
//     daniyal: 'Daniyal',
//     age: 14,
//     passion: 'coding'
// });
// localStorage.setItem('lname', 'sadiq');

// let fname = localStorage.getItem('fname')
// let lname = localStorage.getItem('lname')

// localStorage.clear()

// localStorage.removeItem('fname')

// console.log(fname, lname);
// var myObj = {
//     name: 'Daniyal'
//     age: 14

// }

// localStorage.setItem('obj', {name: 'daniyal'})

let myObj = {
    name: "Daniyal",
    age: 14
};

localStorage.setItem("profile", myObj);

localStorage.getItem("profile")
localStorage.setItem("profile", JSON.stringify(myObj));
let storageProfileString = localStorage.getItem("profile");
let savedPerson = JSON.parse(storageProfileString);
