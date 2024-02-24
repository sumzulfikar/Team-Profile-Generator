const Employee=require("./Employee");

//Created Intern class which is a child class of Employee
class Intern extends Employee{

    constructor(name,id,email,school){
     super(name,id,email);
     this.school=school;
    }
getSchool(){
 return this.school;
}
getRole(){
    return Intern; 
}
}

module.exports=Intern;