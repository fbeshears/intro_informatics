#demo_lib.coffee

fs = require 'fs'
http = require 'http'
url = require 'url'

readlineSync = require 'readline-sync'

if !String.prototype.removePunctuation
  String.prototype.removePunctuation = () ->
    punctuationless = this.replace(/[\]\[\.,-\/#!$%\^&\*;:{}=\-_`~()\?\'\"']/g,"")
    return punctuationless.replace(/\s{2,}/g," ")

if !String.prototype.trim
 String.prototype.trim = () ->
  return this.replace(/^\s+|\s+$/g,'')

if !String.prototype.lstrip
 String.prototype.lstrip = () ->
  return this.replace(/^\s+/g,'')

if !String.prototype.rstrip
 String.prototype.rstrip = () ->
  return this.replace(/\s+$/g,'')


if !String.prototype.startsWith
  String.prototype.startsWith = (s) ->
    return s == this.slice(0,s.length)

if !String.prototype.endsWith
  String.prototype.endsWith = (s) ->
    n = this.length
    return s == this.slice(n - s.length, n)

if !Array.prototype.sum
  Array.prototype.sum = () ->
    total = 0
    i = this.length
    while i--
      total += this[i]                                                                                                                        
    return total


# Use RegExp.escape if you literally want to search for
# the string "^Subject". For example:
# search = RegExp.escape(inp)
#
# Don't use it if you just want ^Subject to be a regular expression
# that searches for "Subject" at the beginning of a string.

if !RegExp.escape
  RegExp.escape = (s) ->
      return s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')


# get npm request module for really fancy download
httpDownload = (uri, fileName) ->
  writer = fs.createWriteStream(fileName)
  request = http.get uri, (response) -> response.pipe(writer)
  request.on 'error', (e) -> console.log("Got error: #{e.message}")
  return



urlReadText = (target_url, callback) ->
  parsed_url = url.parse(target_url)
  request = http.get parsed_url, (response) ->
    pageData = ""
    response.setEncoding 'utf-8'
    response.on 'data', (chunk) -> pageData += chunk
    response.on 'end', () ->  callback(null, pageData)

  request.on 'error', (e) -> callback("Got error: #{e.message}", null)
  return


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
  httpDownload
  urlReadText
  readFile
  readLines
  rawInput
}