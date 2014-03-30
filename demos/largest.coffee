#largest.coffee

largest = null
console.log "Before: #{largest}"

for interval in [3, 41, 12, 9, 74, 15]
  if largest == null or largest < interval
    largest = interval
  console.log "Loop: #{interval}, #{largest}"

console.log "Largest: #{largest}"