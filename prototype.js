/**1
 *  Prototype based -> legacy
 *          we donot use arrow function here because this is not used.
 *  
 * Classes based
 *          Data hunxa
 *          Function Hunxa
 *  
 *  object
 *  functional classes
 */

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(('Hello'+ ' ' +this.name + '!!!'));
    
}

function Child(name,age){
    Person.call(this,name) //Inheritance
    this.age = age
}

// const user1 = new Person ('Palsang') // Object Creation
// user1.greet()

Child.prototype = Object.create(Person.prototype)
Child.prototype.constructor = Child;

Child.prototype.showAge = function(){
    console.log(`I am ${this.age} years old`);
    
}

const childObj = new Child('palsang',20)
childObj.greet()
childObj.showAge()


// Prototype practice

function Person (name){
    this.name = name;
}

Person.prototype.greet = function() {
    console.log('Hi, My name is ' + this.name)
}

Person.prototype.eat = function(){
    console.log('I ate');
}

Person.prototype.sleep = function(){
    console.log('I slept')
}

let engineer = new Person('John')
engineer.eat()
engineer.sleep()

function Student(name , faculty){
    Person.call(this, name)  // Inheriting name varible from Person
    this.faculty = faculty
}

// Inheriting methods from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.study = function(){
    console.log('Learn and remembers courses')
}

let student1 = new Student('Sabin', 'HM')
student1.greet()
student1.eat()