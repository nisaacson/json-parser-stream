var Transform = require('stream').Transform
var util = require('util')

function Parser(opts) {
  opts = opts || {}
  opts.objectMode = true
  Transform.call(this, opts)
}

util.inherits(Parser, Transform)

Parser.prototype._transform = function transform(chunk, encoding, done) {

  var data = JSON.parse(chunk)
  this.push(data)
  done()
}

module.exports = Parser
