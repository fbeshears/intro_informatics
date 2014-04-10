# words.coffee

# CoffeeScript version of python code at:
# Python for Informatics by Charles Severance
# Section 1.8   p. 11

dl = require './demo_lib'

name = dl.rawInput('Enter file name: ')
name = if name.length > 0 then name else 'words.txt'

text = dl.readFile(name)

words = text.split(/\s+/)

counts = {}

for word in words
  if not counts[word]?
    counts[word] = 1
  else
    counts[word] +=  1


bigcount = null
bigword = null

for own word, count of counts
  if bigcount is null or count > bigcount
    bigword = word
    bigcount = count

console.log "bigword: #{bigword}   bigcount: #{bigcount}"
