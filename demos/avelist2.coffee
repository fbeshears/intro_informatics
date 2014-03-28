#avelist2.coffee

dl = require './demo_lib'

sum = (numberlist) ->
  total = 0
  for value in numberlist
    total += value
  return total


numlist = []


while true
  inp =  dl.rawInput('Enter a number: ')
  break if inp is 'done'
  value = parseFloat(inp)
  numlist.push(value)

total = sum(numlist)

average = total/numlist.length

console.log "Average: #{average}"