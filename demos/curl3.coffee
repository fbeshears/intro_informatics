#curl3.coffee

dl = require './demo_lib'

fs = require 'fs'
path = require 'path'

prompt = 'Please enter a URL like http://www.py4inf.com/cover.jpg'
urlstr = raw_input(prompt).trim()

#urlstr = 'http://www.py4inf.com/cover.jpg'


# see   urls_and_dir_paths.coffee 
# for more on parsing urls and directory paths

words = urlstr.split('/')
fname = words[words.length-1]
console.log fname
# => cover.jpg

# get current working directory
cwd = process.cwd()   

file_path = path.join(cwd, fname)
console.log file_path
# => C:\Users\Fred\ProgLang\my_github_demos\intro_informatics\demos\cover.jpg



if fs.existsSync(file_path)
  console.log "#{fname} already exists"
  ans = dl.rawInput("Replace #{fname} (Y/N)? ")
  if ans != 'Y'
    console.log "Data not copied"
    process.exit(0)
  console.log "Replacing #{fname}"


# simple download works, but doesn't report characters downloaded
dl.httpDownload( urlstr, file_path )

