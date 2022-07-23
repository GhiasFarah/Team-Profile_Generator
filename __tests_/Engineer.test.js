const Engineer = require('../lib/Engineer')

test('return github', ()=>{
    let eng = new Engineer(1,2,3,'engGithub')
    expect(eng.github).toBe(eng.github)
})