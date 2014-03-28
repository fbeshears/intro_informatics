#demo_lib.coffee

fs = require 'fs'
readlineSync = require 'readline-sync'

String.prototype.removePunctuation = () ->
  punctuationless = this.replace(/[\]\[\.,-\/#!$%\^&\*;:{}=\-_`~()\?\'\"']/g,"")
  return punctuationless.replace(/\s{2,}/g," ")

Array.prototype.sum = () ->
  total = 0
  i = this.length

  while i--
    total += this[i]

  return total

String.prototype.startsWith = (s) ->
  return s == this.slice(0,s.length)

String.prototype.endsWith = (s) ->
  n = this.length
  return s == this.slice(n - s.length, n)

readFile = (fname) ->
  text = fs.readFileSync(fname).toString()
  return text

readLines = (fname) ->
  text = readFile(fname)
  lines = text.split(/\r?\n/)
  return lines

rawInput = (prompt) ->
  return readlineSync.question(prompt)

module.exports = {
  readFile
  readLines
  rawInput
}