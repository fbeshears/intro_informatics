#grade.coffee

dl = require './demo_lib'

inp = dl.rawInput('Enter score: ')

score = parseFloat(inp)

score = -1 if isNaN(score)

if score > 1.0 or score < 0.0
    console.log 'Bad score'
else if score > 0.9
    console.log 'A'
else if score > 0.8
    console.log 'B'
else if score > 0.7
    console.log 'C'
else if score > 0.6
    console.log 'D'
else
    console.log 'F'