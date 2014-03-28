#celsius.coffee

dl = require './demo_lib'


inp = dl.rawInput 'Enter Celsius Temperature:' 
cel = parseFloat(inp)
fahr =  cel * 9.0/5.0 + 32.0
console.log fahr