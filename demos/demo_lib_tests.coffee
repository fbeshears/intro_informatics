#test_ends_with.coffee
dl = require './demo_lib'

letters = "abcde"
console.log "endsWith works" if letters.endsWith("de")
console.log "startsWith works" if letters.startsWith("ab")


quote = "But, soft! what light through yonder window breaks?"

no_punct_quote = quote.removePunctuation()

console.log "Quote: #{quote}"
console.log "No Punctuation: #{no_punct_quote}"

nums = [1,2,3,4,5]

console.log "nums: #{nums}"
console.log "sum: #{nums.sum()}"