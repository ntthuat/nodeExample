function learningObject(name, money) {
    this.name = name;
    this.money = money;
}

learningObject.prototype.description = function () {
    console.log('Hello ' + this.name + ' ' + this.money);
}

var nodeJs = new learningObject('Lap trinh NodeJS', 800);

nodeJs.description();