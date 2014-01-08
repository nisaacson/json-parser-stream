var Transform = require('stream').Transform
var util = require('util')

function Parser() {
  var opts = {
    objectMode: true
  }
  Transform.call(this, opts)
}

util.inherits(Parser, Transform)

Parser.prototype._transform = function(chunk, encoding, done) {

  var data = JSON.parse(chunk)
  this.push(data)
  done()
}

module.exports = Parser
