#avenum.coffee

dl = require './demo_lib'


total = 0
count = 0

while true
  inp =  dl.rawInput('Enter a number: ')
  break if inp is 'done'
  value = parseFloat(inp)
  total = total + value
  count = count + 1


average = total/count

console.log "Average: #{average}"