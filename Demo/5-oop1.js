var person = {
    firstName   : "Pham",
    name        : "Khoa",
    welcome     : function () {
        console.log("Welcome " + this.firstName + " " + this.name);
    }
}

person.welcome();

console.log(person.firstName);
console.log(person['name']);