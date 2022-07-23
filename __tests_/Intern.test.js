const Intern = require('../lib/Intern')

test('return school', ()=>{
    let int = new Intern(1,2,3,'testSchool')
    expect(int.school).toBe('testSchool')
})