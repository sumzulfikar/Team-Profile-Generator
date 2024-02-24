//Created Parent class Employee
class Employee{
//Created constructor for employee
    constructor(name,id,email){
        this.name=name;
        this.id=id;
        this.email=email;
        
    }
// methods to return each input type
getName(){

    return this.name;
}

getId(){
    
    return this.id;
}

getEmail(){
    
    return this.email;
}

getRole(){
 return Employee;
}



}

module.exports=Employee;