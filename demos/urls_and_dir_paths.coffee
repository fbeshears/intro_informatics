#urls_and_dir_paths.coffee
#parsing urls and directory paths

urlstr = 'http://www.py4inf.com/cover.jpg'



# To get the file name (e.g. cover.jpg)
# Split path into an array and get the last "word" (e.g. cover.jpg)
words = urlstr.split('/')
fname = words[words.length-1]


console.log fname
# => cover.jpg


# Notes on getting paths to your current working directory:

# process.cwd() returns current working directory where the script has been executed 
# (unless it's been changed by a 'process.chdir' statement).

# __filename returns absolute path to script file.
# __dirname returns absolute path to directory of __filename.


cwd = process.cwd() 
console.log cwd
# => C:\Users\Fred\ProgLang\my_github_demos\intro_informatics\demos

console.log __filename
# C:\Users\Fred\ProgLang\my_github_demos\intro_informatics\demos\curl3.coffee

console.log __dirname
# => C:\Users\Fred\ProgLang\my_github_demos\intro_informatics\demos
  

file_path = path.join(cwd, fname)
console.log file_path
# => C:\Users\Fred\ProgLang\my_github_demos\intro_informatics\demos\cover.jpg


console.log path.basename(file_path)  #one way to get the fname back
# => cover.jpg

# We can also turn the file path into a list:
# path.sep is the platform-specific file separator. '\\' or '/'. 
path_list = file_path.split(path.sep)
console.log path_list
# =>
# [ 'C:',
#   'Users',
#   'Fred',
#   'ProgLang',
#   'my_github_demos',
#   'intro_informatics',
#   'demos',
#   'cover.jpg' ]