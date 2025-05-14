/**class
 *
 * You can use arrow function inside class object
 */

class Person {
  // The data can be either public default . or private using #. but not protected.

  //Public
  name;

  //Private

  #email;

  // Static
  static address;

  static getAddress() {
    console.log(this.address);
  }

  // can never be an async function or return Promise
  // ca never be an arrow function
  // should not invoke directly -> automatically invokes

  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }

  greet = () => {
    console.log(this.name);
  };
}

const personObj = new Person("Palsang");

personObj.greet();
// personObj.#email -> can't do it. only inside class

Person.getAddress(); // Parent ko through bata access garny parxa

// inheritance in classess

class Child extends Person {
    constructor(name, email){
        super(name ,email)
    }

    greet(){
        super.greet() // cant use arrow function while using super keyword
        console.log(('I am child'));
        
    }
}

const child = newChild('Palsang',' merndeveloper.palsang@gmail.com')
child.address = 'Lalitpur'

console.log(Child.address);
console.log(child);
Child.getAddress()



// Injection => dependency injection
// inversion 

class User {
    person;

    // constructor(obj){
    //     this.person = obj
    // }

    constructor(){
        this.person = new Person()
    }

}

// const userObj = new User(new Person)
// userObj.person.greet()

const userObj = new User()


// architecture in framework