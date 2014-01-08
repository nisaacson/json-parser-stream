var stream = require('stream')
var _ = require('lodash-node')
var sinon = require('sinon')
var expect = require('chai').expect
var JSONParserStream = require('../')

var numRows = 10
describe('Parser test', function() {
  describe('given a json string', function() {
    it('should parse into objects', function(done) {
      var parser = new JSONParserStream()
      expect(parser).to.exist
      var inputStream = jsonStream()
      var output = inputStream.pipe(parser)
      var validateLineSpy = sinon.spy(validateLine)

      output.on('finish', finishHandler)
      output.on('readable', readableHandler)

      function validateLine(line) {
        expect(line).to.exist
        expect(line).to.be.a('object')
      }

      function readableHandler() {
        var data
        while (true) {
          data = output.read()
          if (!data) {
            break
          }
          validateLineSpy(data)

        }
      }

      function finishHandler() {
        console.log('finish called')
        expect(validateLineSpy.callCount).to.be.above(1)
        done()
      }

    })
  })

  function createWriter() {
    var writer = new stream.Transform({
      objectMode: true
    })
    writer._transform = function transform(chunk, encoding, done) {
      this.push(chunk)
      done()
    }
    return writer
  }
  function jsonStream() {
    var writer = createWriter()
    var ids = _.range(0, numRows)
    ids.forEach(function(id) {
      var row = {
        id: id,
        foo: 'bar_' + id
      }
      var json = JSON.stringify(row)
      writer.write(json)
    })
    setTimeout(writer.end.bind(writer), 10)
    return writer
  }
})
