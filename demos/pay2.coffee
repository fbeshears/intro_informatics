#pay2.coffee

dl = require('./demo_lib')

inp = dl.rawInput('Enter Hours: ')
hours = parseFloat(inp)

inp = dl.rawInput('Enter Rate: ')
rate = parseFloat(inp)

if hours > 40
    pay = (hours * rate) + ((hours - 40) * rate * 1.5)
else:
    pay = hours * rate

console.log 'Pay: ', pay