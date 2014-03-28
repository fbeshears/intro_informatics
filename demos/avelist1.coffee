#avelist1.coffee

dl = require './demo_lib'

numlist = []


while true
  inp = dl.rawInput('Enter a number:')
  break if inp is 'done'
  value = parseFloat(inp)
  numlist.push(value)

total = 0
for num in numlist
  total = total + num

average = total/numlist.length

console.log "Average: #{average}"