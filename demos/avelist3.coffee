#avelist3.coffee
dl = require './demo_lib'


# create an empty array
numlist = []

while true
  inp =  dl.rawInput('Enter a number: ')
  break if inp is 'done'
  value = parseFloat(inp)
  numlist.push(value)


#numlist.sum()  requires a demo_lib code enhancement of Array

average = numlist.sum()/numlist.length

console.log "Average: #{average}"