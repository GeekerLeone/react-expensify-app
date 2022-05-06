
// Object destructuring

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher:{
        name: 'Penguin'
    }
}

const {name : publisherName = 'Self-Published' } = book.publisher
console.log(publisherName);

const person = {
    name: 'Liang',
    age: 26,
    loaction:{
        city: 'LA',
        temp: 76
    }
}

const {gender = 'unknown', name: firstName} = person;
console.log(`I am ${firstName}, I am ${gender}`);

//
////////// Array Destructuring

const address = ['325 W Adams Blvd', 'LA', 'CA', '90007'];
const [, ,state, , country = ' USA'] = address;
console.log(`I live at ${state}, ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [itemName, small, medium, large] = item;
console.log(`A medium ${itemName} costes ${medium}`);