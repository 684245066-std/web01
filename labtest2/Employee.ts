abstract class Employee{
    constructor(public name: string, public position: string){}

displayInfo():string;
    showProfile(){
        console.log(`Name: ${this.name}`);
    }
}
class Manager extends Employee{
    constructor(public department: string){
    }