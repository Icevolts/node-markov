const {MarkovMachine,makeText} = require('./markov')

let mm = new MarkovMachine('the')
let words = mm.words
let text = mm.makeText()

describe('test the functionality of MarkovMachine', () => {
    it('should return the only word passed in', () =>{
        expect(words).toEqual(expect.arrayContaining(['the']))
    })
})

describe('test functionality of words being spat out of the MarkovMachine', () => {
    it('should create a string of `the` since its the only word passed in', () =>{
        expect(text).toEqual(expect.stringContaining('the'))
    })
})