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
console.log(`1st obj ${myobj}`);
console.log(`2nd obj ${myobj2}`);
