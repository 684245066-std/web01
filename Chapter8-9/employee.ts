abstract class Employee{
    constructor(public name: string, public exp: number){}
    abstract getBaseSalary():number;
    showProfile(){
        console.log(`Name: ${this.name}`);
    }
}
class Programmer extends Employee{
    getBaseSalary(): number {
        return 25000;
    }
}
class Manager extends Employee{
    getBaseSalary(): number {
        return 50000;
    }
}
const employee: Employee[] = [new Programmer("Jee",5), new Manager("Jame",2), new Programmer("Alice",3)];
employee.forEach(emp=>{
    emp.showProfile();
    console.log(`ตำแหน่งงาน ${emp.constructor.name} เงินเดือนเริ่มต้น ${emp.getBaseSalary()} บาท`);
    const plus: number = emp.getBaseSalary() *0.1 * emp.exp;
    console.log(`ค่าประสบการณ์ ${plus} บาท รวม ${plus+emp.getBaseSalary()} บาท`)
})