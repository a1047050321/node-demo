function People(name,sex,age){
    this.name = name;
    this.sex = sex;
    this.age = age;
};
People.prototype = {
    saveHello:function(){
        console.log(this.name +this.sex);
    }
};
exports.a= 1;
module.exports = People;