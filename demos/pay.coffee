#pay.coffee

dl = require('./demo_lib')

inp = dl.rawInput('Enter Hours: ')
hours = parseFloat(inp)

inp = dl.rawInput('Enter Rate: ')
rate = parseFloat(inp)

pay = hours * rate

console.log 'Pay: ', pay