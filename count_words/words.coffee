# words.coffee

# CoffeeScript version of python code at:
# Python for Informatics by Charles Severance
# Section 1.8   p. 11


fs = require 'fs'
readlineSync = require 'readline-sync'

name = readlineSync.question('Enter file name:')

text = fs.readFileSync(name).toString()

words = text.split(/\s+/)

console.log words

counts = {}

for word in words
  count = counts[word]
  counts[word] = if count then count + 1 else 1


bigcount = null
bigword = null

for own word, count of counts
  if bigcount is null or count > bigcount
    bigword = word
    bigcount = count

console.log "bigword: #{bigword}   bigcount: #{bigcount}"
