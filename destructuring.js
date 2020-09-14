let myobj = {
    name: 'daniyal',
    age: 14,
    address: {
        address1: 'karachi',
        address2: 'Islamabad'
    }
}
const {address: {address1, address2: {address2="Punjab"}}} = myobj;

console.log(address1, address2);
