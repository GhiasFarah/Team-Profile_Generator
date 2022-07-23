const Manager = require('../lib/Manager')

test('return office number', ()=>{
    let man = new Manager(1,2,3,4)
    expect(man.officeNumber).toEqual(man.officeNumber)
})