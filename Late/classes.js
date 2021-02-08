/* TODO: Create an Pet class with a constructor and a speak method.
         The constructor should take a single argument, the name of the pet.
         The speak method should write to the console the message "<name> makes a noise."
*/

class Pet 
{
    constructor(name)
    {
    this.name = name;
    }

    speak(){
        console.log(this.name + " makes a noise!");
    }
}

/* TODO: Create an Dog class that extends the Pet class.
         It should have a constructor and a speak method.
         The constructor should take a single argument, the name of the pet and call the super class constructor.
         The speak method should write to the console the message "<name> says woof, woof."
*/
class Dog extends Pet
{
    constructor(name)
    {
        super(name);
    }

    speak() 
    {
        console.log(this.name + " says woof, woof!");
    }
}


/* TODO: Create a Cat class that extends the Pet class.
         It should have a constructor and a speak method.
         The constructor should take a single argument, the name of the pet and call the super class constructor.
         The speak method should write to the console the message "<name> says meow."
*/
class Cat extends Pet
{
    constructor(name)
    {
        super(name);
    }

    speak(){
        console.log(this.name + " says meow!");
    }
}

const pets = [
    new Dog('Mitzie'),
    new Cat('Felix')
];
pets.forEach(pet => pet.speak());