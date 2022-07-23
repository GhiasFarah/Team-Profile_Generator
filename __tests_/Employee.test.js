const Employee = require('../lib/Employee')

test('return name', ()=>{
    let emp = new Employee('empName',2,3)
    expect(emp.name).toBe('empName')
})