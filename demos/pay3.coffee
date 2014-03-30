#pay3.coffee

dl = require('./demo_lib')

try

  inp = dl.rawInput('Enter Hours: ')
  hours = parseFloat( inp )
  if isNaN( hours )
    throw("bad hours") 


  inp =  dl.rawInput('Enter Rate: ')
  rate =  parseFloat( inp )
  if isNaN( rate )
    throw("bad rate") 

  if hours > 40
    pay = hours * rate + (hours - 40) * rate * 1.5
  else
    pay = hours * rate

  console.log("Pay: #{pay}")

catch e
  console.log "Error: #{e}" 
  console.log 'Please enter numeric input.'