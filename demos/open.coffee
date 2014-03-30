#open.coffee
dl = require('./demo_lib')

lines = dl.readLines('mbox.txt')

count = 0
for line in lines
  count = count + 1

console.log("Line Count: #{count}")