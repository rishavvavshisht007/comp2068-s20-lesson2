console.clear();
// Blocking(sync)
const sayHi = name => console.log(`Hello, ${name}`);
sayHi("rishav");
sayHi("karran");
sayHi("lupdi");
// Non Blocking(Aync)
setTimeout(sayHi,2500, 'ritvik');
setTimeout(sayHi,3500, 'vik');
setTimeout(sayHi,1500, 'viktor');
sayHi('olivia');

//callback
const fareWell = name => console.log(`goodbye,${name}`);
const greeting = (name, callback)=> {
console.log(`hello, ${name}`);

callback(name);
}

greeting("rishav", sayHi);
