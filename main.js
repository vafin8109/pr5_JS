'use strict'; 
 
// №1 
 
let salaries = { 
    Peter: 100, 
    Annet: 160, 
    Ivan: 130 
}; 
 
let sum = 0; 
for (let key in salaries) { 
    sum += salaries[key]; 
} 
 
console.log(sum); 
 
// №2 
 
function multiplyNumeric(obj) { 
    for (let key in obj) { 
        if (typeof obj[key] === 'number') { 
            obj[key] *= 2; 
        } 
    } 
} 
 
let menu = { 
    width: 200, 
    height: 300, 
    title: "My menu" 
}; 
 
multiplyNumeric(menu); 
 
console.log(menu); 
 
// №3 
 
let calculator = { 
    read() { 
        this.a = +prompt('Первое число:', 0); 
        this.b = +prompt('Второе число:', 0); 
    }, 
    sum() { 
        return this.a + this.b; 
    }, 
    mul() { 
        return this.a * this.b; 
    } 
}; 
 
calculator.read(); 
alert(calculator.sum()); 
alert(calculator.mul()); 
 
 
// №4 
 
function extractCurrencyValue(str) { 
    return +str.slice(1); 
} 
 
console.log(extractCurrencyValue('$120')); 
 
// №5 
 
let arkasha = { name: "Аркадий", age: 20 }; 
let kesha = { name: "Иннокентий", age: 30 }; 
let angella = { name: "Анжелла", age: 40 }; 
 
let users = [arkasha, kesha, angella]; 
 
let names = users.map(user => user.name); 
 
console.log(names); 
 
// №6 
 
let grisha = { name: "Григорий", age: 20 }; 
let nataha = { name: "Наталья", age: 30 }; 
let oleg = { name: "Олег", age: 40 }; 
 
let users1 = [grisha, nataha, oleg]; 
 
function getAverageAge(users) { 
  let totalAge = users1.reduce((sum, user) => sum + user.age, 0); 
  return totalAge / users1.length; 
} 
 
console.log(getAverageAge(users1));