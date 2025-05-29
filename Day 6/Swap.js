function swap(obj) {
    let temp = obj.a;
    obj.a = obj.b;
    obj.b = temp;
}

let numbers = { a: 5, b: 10 };
console.log("Before swap:", numbers);
swap(numbers);
console.log("After swap:",numbers);
