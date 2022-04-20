function dog(name){
    this.name = name;
}
dog.prototype.eat = function(cat) {
    this.stomach.push(cat)
    }

module.exports = dog;