let myobj = {
    name: 'daniyal',
    age: 14,
    address: {
        address1: 'karachi',
        address2: 'Islamabad'
    }
}
let myobj2 = {
    ...myobj,

    address:    {address1:'Karachi', address2:'Faislabad'}
}
console.log('My First Obj =====> ' , myobj );
console.log('My Second Obj ====>',  myobj2);