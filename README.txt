This repository contains CoffeeScript and JavaScript translations of the Python code found in the textbook Pyton for Informatics by Charles Severance.

To run the JavaScript and CoffeeScript code you need to have node.js and the node package manager (npm) installed. Once you have these two apps installed, you can use npm to install packages such as coffee-script.

You install the coffee-script globally while in command shell with the following (note: the ">" is the command shell prompt):

> npm install -g coffee-script

Some folders have a package.json file. If they do it means that you need to install one or more node packages to run the code in that folder. To do so, download the directory to your computer, change into that directory, and run the following from the command shell:

> npm install


Once you have done this and you have the coffee-script package installed, you can run coffeescript code such as words.coffee in the count_words directory with:

> coffee words.coffee


If you have installed Python and you want to run Python code such as words.py enter the following in the command shell:

> python words.py

To run JavaScript code such as words.js enter the following in the command shell:

> node words.js



