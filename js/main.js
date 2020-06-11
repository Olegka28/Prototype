'use strict';

// Задача

// создать 3 объкта (objA, objB, objC) Придумать как минимум 1 свойство и 1 метод каждому объекту.

// Прототипом objC дожен быть objB, а прототипом objB должен быть objA.

// Реализовать цепочку протитопов с помощью Object.create.
// Реализовать цепочку протитопов с помощью непосредственного изменения прототипа (__proto__, setPrototypeOf)
// Реализовать цепочку протитопов с помощью функций конструкторов.

const objA = {
    name: "Oleg",
    showName() {
        return this.name
    }
}

const objB = {
    surname: "Kolesnuk",
    showFullName () {
        return `My full name: ${this.name} ${this.surname}`
    },
    // __proto__: objA
}

const objC = {
    age: 24,
    showFullInfo () {
        return `My name ${this.name} ${this.surname}
I am ${this.age} years old`
    },
    // __proto__: objB
}

Object.setPrototypeOf(objC, objB);
Object.setPrototypeOf(objB, objA);

console.log('----------------------------------')
console.log(objC, "через __proto__ или Object.setPrototypeOf()")
console.log(objA.showName());
console.log(objB.showFullName());
console.log(objC.showFullInfo());


const objCreateA = {
    name: "Oleg",
    showName() {
        return this.name
    }
}

const objCreateB = Object.create(objCreateA);
objCreateB.surname = "Kolesnuk"
objCreateB.showFullName = function () {
    return `My full name: ${this.name} ${this.surname}`
};

const objCreateC = Object.create(objCreateB);
objCreateC.age = 24;
objCreateC.showFullInfo = function () {
    return `My name ${this.name} ${this.surname}
I am ${this.age} years old`
};

console.log('----------------------------------')
console.log(objCreateC, "через Object.create")
console.log(objCreateA.showName());
console.log(objCreateC.showFullName());
console.log(objCreateC.showFullInfo());


function ObjA (name) {
    this.name = name
}

ObjA.prototype.showName = function () {
    return this.name
}

function ObjB (name, surname) {
    ObjA.call(this, name)
    this.surname = surname
}

ObjB.prototype = Object.create(ObjA.prototype);
ObjB.prototype.showFullName = function() {
    return `My full name: ${this.name} ${this.surname}`
}

function ObjC (age, surname, name) {
    ObjB.call(this, name, surname)
    this.age = age
}

ObjC.prototype = Object.create(ObjB.prototype);
ObjC.prototype.showFullInfo = function () {
    return (`My name ${this.name} ${this.surname}
I am ${this.age} years old`)
}
const objConstructorC = new ObjC(24, 'Kolesnik', 'Oleg');



console.log('----------------------------------')
console.log(objConstructorC, 'Через конструктор')
console.log(objConstructorC.showName())
console.log(objConstructorC.showFullName())
console.log(objConstructorC.showFullInfo())
