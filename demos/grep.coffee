#grep.coffee

dl = require './demo_lib'



fname = 'mbox.txt'

lines = dl.readLines(fname)

inp = dl.rawInput('Enter a regular expression: ')
#inp = "^Subject"

# RexExp enhancement in demo_lib
# Use the following if you literally want to search for "^Subject"
# search = RegExp.escape(inp)

# Don't use it if you just want ^Subject to be a regular expression.

search = inp

re_search = new RegExp search 

count = 0

for line in lines
  line = line.rstrip()        # rstrip() is a String enhancement in demo_lib
  count++  if re_search.test(line)

console.log "#{fname} had #{count} lines that matched #{search}"


