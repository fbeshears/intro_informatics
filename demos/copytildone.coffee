#copytildone.coffee

dl = require './demo_lib'


while true
  line =  dl.rawInput('> ')
  if line[0] is "#"
    continue

  if line is 'done'
    break

  console.log line

console.log 'Done!'