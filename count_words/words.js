// Generated by CoffeeScript 1.6.3
(function() {
  var bigcount, bigword, count, counts, fs, name, readlineSync, text, word, words, _i, _len,
    __hasProp = {}.hasOwnProperty;

  fs = require('fs');

  readlineSync = require('readline-sync');

  name = readlineSync.question('Enter file name:');

  text = fs.readFileSync(name).toString();

  words = text.split(/\s+/);

  counts = {};

  for (_i = 0, _len = words.length; _i < _len; _i++) {
    word = words[_i];
    count = counts[word];
    counts[word] = count ? count + 1 : 1;
  }

  bigcount = null;

  bigword = null;

  for (word in counts) {
    if (!__hasProp.call(counts, word)) continue;
    count = counts[word];
    if (bigcount === null || count > bigcount) {
      bigword = word;
      bigcount = count;
    }
  }

  console.log("bigword: " + bigword + "   bigcount: " + bigcount);

}).call(this);
