const Employee=require("./Employee");

//Created Employee class which is a child class of Employee
class Manager extends Employee{

constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber=officeNumber;
}

getOfficeNumber(){
    return this.officeNumber;
}

getRole(){
    return "Manager";
}
}

module.exports=Manager;