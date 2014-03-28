#average.coffee

dl = require './demo_lib'


total = 0
count = 0

while true
  inp =  dl.rawInput('Enter a number: ')

  if inp is 'done'
    break
  else if isNaN(inp)                # NaN - Not a Number
    console.log 'Invalid input'
    continue
  
  value = parseFloat(inp)
  total = total + value
  count = count + 1


average = total/count

console.log "Average: #{average}"