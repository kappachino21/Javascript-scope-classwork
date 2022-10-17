console.log("Hello");

var y = 5;

function A() {
  return B() + y + c;
  function B() {
    var z = 3;
    return C();
    function C() {
      c = 10;
      var a = 10;
      return z + a;
    }
  }
}
console.log(A());

const person = {
  name: "Bob",
  age: 20,
  greeting: function () {
    console.log(`Hi, my name is ${this.name}`);
  },
};

const person2 = {
  name: "Jason",
  age: 30,
};

person.greeting.call(person2);
