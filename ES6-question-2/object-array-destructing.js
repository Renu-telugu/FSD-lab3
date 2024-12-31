//object destructing
const fruit = {
    a : 'apple',
    b: 'banana'
  };
  
  // Destructuring
  const {a:name, b, c} = fruit;
  
console.log(name); 
console.log(b);
console.log(c);

//array destructing
const fruits = ['mango', 'papaya'];
const [x, y, z='guava'] = fruits;
console.log(x);
console.log(y);
console.log(z);