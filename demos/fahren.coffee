#fahren.coffee

dl = require './demo_lib'

inp = dl.rawInput 'Enter Fahrenheit Temperature: '
fahr = parseFloat(inp)
cel = (fahr - 32.0) * 5.0 / 9.0

console.log cel