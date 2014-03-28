#argfile.coffee
dl = require './demo_lib'

fname = process.argv[2]

text = dl.readFile(fname)

console.log "#{fname} is #{text.length} bytes"