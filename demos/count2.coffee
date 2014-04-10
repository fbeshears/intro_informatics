#count2.coffee

dl = require './demo_lib'


fname = dl.rawInput('Enter file name: ')
#fname = 'romeo-full.txt'

try
  lines = dl.readLines(fname)
catch
  console.log "File cannot be opened: #{fname}"
  process.exit(1)


counts = {}

# note: removePunctuation() requires an enhancement to String()
# which is in demo_lib

for line in lines
  line = line.trim()
  continue if line.length == 0
  words = line.removePunctuation().toLowerCase().split(/\s+/)
  for word in words
    if not counts[word]?
      counts[word] = 1
    else
      counts[word] +=  1


console.log counts