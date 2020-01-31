


class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(office) {
        for(let i=1;i<11;i++){
            office.documents.push(new Document(this.name))
        }
    }
}

class Manager {

    constructor(name) {
        this.name = name
        this.employees = []

    }

    hireEmployee(name) {
        const newEmployee = new Employee(name)
        this.employees.push(newEmployee)
    }


    askEmployeesToWork(office) {
        for (const employee of this.employees) {
            employee.work(office)
        }
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }

    clean() {
        console.log('Clean')
    }
}


class Office {

    constructor() {
        this.documents = []
        this.cleaners =  []
        this.managers = []
    }

    hireCleaner(name) {
        this.cleaners.push(new Cleaner(name))
    }
    hireManager(name){
        this.managers.push(new Manager(name))
    }

    startWorkDay() {
        for (const manager of this.managers) {
            manager.askEmployeesToWork(this)
        }
        for (const cleaner of this.cleaners) {
            cleaner.clean()
        }

    }

}


