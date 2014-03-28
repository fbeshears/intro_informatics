#greet.coffee

dl = require './demo_lib'

name = dl.rawInput('Enter your name: ')

console.log "hello #{name}"