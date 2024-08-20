// OOP Task
// Employe adinda bir class yaradirsiz ad position salary qebul eden constructor qurun
// daha sonra details deye function qurun burda name position ve salary dinamik olaraq versin
// daha sonra ele bir functionn qurun ki ona faiz olaraq necese reqem verildiyinde hemin 
// iscinin maasina o qeder % artim olsun meselen 100 manat alirsa 50% gonderdikde 150m olsun
// elave olaraq bir static function qurun ve iki iscinin maaslarini muqayise elesin hansi coxdusa 
// onu qaytarsin

// Manager , AdministrativeStaff  adinda classlar yaradin ve onlarinda 
// constructorunda name salary position olsun ve detail deye func olsun orda
// constructorda gelen  name salary position haqqinda melumati eks etdirsin


// Company adinda class yaradin constructor olaraq name qebul etsin ve gelen name 
// uygun olaraq butun iscileri ozunde toplayan array qurun  company classi daxilinde

// butun isciler haqqinda melumat veren function olsun
// Sirketin toplam verilen maasini hesablayan function olsun
// en cox maas alan isci haqqinda melumat veren function olsun 

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    details() {
        return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary} AZN`;
    }
    applyRaise(percentage) {
        this.salary += (this.salary * percentage / 100);
    }
    static compareSalaries(emp1, emp2) {
        return emp1.salary > emp2.salary ? emp1 : emp2;
    }
}
class Manager extends Employee {
    constructor(name, salary) {
        super(name, 'Manager', salary);
    }
    details() {
        return `Name: ${this.name}, Position: Manager, Salary: ${this.salary} AZN`;
    }
}
class AdministrativeStaff extends Employee {
    constructor(name, salary) {
        super(name, 'Administrative Staff', salary);
    }
    details() {
        return `Name: ${this.name}, Position: Administrative Staff, Salary: ${this.salary} AZN`;
    }
}
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    showAllEmployees() {
        return this.employees.map(emp => emp.details()).join('\n');
    }
    totalSalaries() {
        return this.employees.reduce((total, emp) => total + emp.salary, 0);
    }
    highestPaidEmployee() {
        if (this.employees.length === 0) return 'No employees available';
        return Employee.compareSalaries(...this.employees).details();
    }
}
const techCorp = new Company('Tech Corp');
const john = new Manager('John Doe', 5000);
const jane = new AdministrativeStaff('Jane Smith', 3000);

techCorp.addEmployee(john);
techCorp.addEmployee(jane);

console.log(techCorp.showAllEmployees());
console.log(`Total Salaries: ${techCorp.totalSalaries()} AZN`);
console.log(`Highest Paid Employee: ${techCorp.highestPaidEmployee()}`);

john.applyRaise(10);
console.log(john.details());

console.log(techCorp.showAllEmployees());
