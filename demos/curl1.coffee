#curl1.coffee

dl = require './demo_lib'

uri = 'http://www.py4inf.com/cover.jpg'

fname = 'cover.jpg'

call_me_when_done = () ->
  console.log "I'm done!"
  return

dl.download( uri, fname, call_me_when_done )
