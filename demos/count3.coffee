#count3.coffee

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

lst = []
for own key, val of counts
  lst.push [val, key]

lst.sort( (a,b) ->  return b[0] - a[0] )


for [val, key] in lst[0 ... 10]
  console.log "#{key} #{val}"



