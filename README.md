# JSON Parser Stream

Parse a readable stream of json strings into javascript objects

[![NPM](https://nodei.co/npm/json-parser-stream.png)](https://nodei.co/npm/json-parser-stream/)

[![Build Status](https://travis-ci.org/nisaacson/json-parser-stream.png)](https://travis-ci.org/nisaacson/json-parser-stream)
[![Dependency Status](https://david-dm.org/nisaacson/json-parser-stream/status.png)](https://david-dm.org/nisaacson/json-parser-stream)
[![Code Climate](https://codeclimate.com/github/nisaacson/json-parser-stream.png)](https://codeclimate.com/github/nisaacson/json-parser-stream)

# Installation
```bash
npm install -S json-parser-stream
```

# Usage

Create an instance of linestream and pipe a readable stream into that instance

```javascript
var JSONParserStream = require('json-parser-stream')
// parser is an instance of require('stream').Transform
var parser = new JSONParserStream()

var readStream = {} // a stream of single json strings per data event
var parser = readStream.pipe(splitter)
parser.on('data', function(chunk) {
  console.dir(chunk)  // no line breaks here :)
})
parser.on('finish', function() {
  console.log('finish event called, all json items read')
})
```



