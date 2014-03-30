#curl1.coffee

dl = require './demo_lib'

uri = 'http://www.py4inf.com/cover.jpg'

fname = 'cover.jpg'



dl.httpDownload( uri, fname )
