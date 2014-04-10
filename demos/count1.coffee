#count1.coffee

dl = require './demo_lib'

fname = dl.rawInput('Enter file name: ')
#fname = 'words.txt'

try
  lines = dl.readLines(fname)
catch
  console.log "File cannot be opened: #{fname}"
  process.exit(1)

counts = {}


for line in lines
  words = line.split(/\s+/)
  for word in words
    if not counts[word]?
      counts[word] = 1
    else
      counts[word] +=  1


console.log counts