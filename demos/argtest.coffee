#argtest.coffee

console.log "Count: #{process.argv.length}"

console.log "Type: #{typeof process.argv}"

for arg in process.argv
  console.log "Argument: #{arg}"