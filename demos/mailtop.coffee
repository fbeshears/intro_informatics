#mailtop.coffee

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

bigc = null
bigw = null

for own word, value of c
  if bigc == null or value > bigc
    bigw = word
    bigc = value

console.log "#{bigw} #{bigc}"
