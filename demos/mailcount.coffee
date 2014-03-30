#mailcount.coffee

dl = require './demo_lib'

#fname = dl.rawInput 'Enter file name: '
fname = 'mbox-short.txt'

lines = dl.readLines(fname)

c = {}

for line in lines
  continue if not line.startsWith('From ') 

  pieces = line.split(/\s+/)
  email = pieces[1]
  if c[email]
    c[email] += 1
  else
    c[email] = 1

console.log c

