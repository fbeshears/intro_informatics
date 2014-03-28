#egg.coffee

dl = require './demo_lib'

fname = dl.rawInput('Enter the file name: ')


try
  lines = dl.readLines(fname)

catch e
  #console.log e
  console.log "This file cannot be opened: #{fname}"
  process.exit(1)

count = 0
for line in lines
  # if line.match(/^Subject:/)
  if line.startsWith("Subject:")
    count += 1

console.log "There are #{count} subject lines in #{fname}"
