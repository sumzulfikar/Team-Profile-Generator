const Employee=require("./Employee");

//Created Engineer class which is a child class of Employee
class Engineer extends Employee{
    constructor(name,id,email,github){
        //inherits value from the parent class Employee
        super(name,id,email);
        this.github=github;
    }

getGithub(){
    return this.github;
}
getRole(){
    return "Engineer";
}
}

module.exports=Engineer;