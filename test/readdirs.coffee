describe 'readdirs', ->
  Given -> @subject = require '../lib/readdirs'

  context 'file names only', ->
    When (done) -> @subject ["#{__dirname}/fixtures/a", "#{__dirname}/fixtures/b"], (err, @files) => done()
    Then -> @files.should.eql ['bar.txt', 'baz.txt', 'foo.txt', 'quux.txt']

  context 'absolute file names', ->
    When (done) -> @subject ["#{__dirname}/fixtures/a", "#{__dirname}/fixtures/b"], { absolute: true }, (err, @files) => done()
    Then -> @files.should.eql [
      "#{__dirname}/fixtures/a/bar.txt",
      "#{__dirname}/fixtures/a/foo.txt",
      "#{__dirname}/fixtures/b/baz.txt",
      "#{__dirname}/fixtures/b/quux.txt"
    ]

  context 'nested', ->
    When (done) -> @subject ["#{__dirname}/fixtures/a", "#{__dirname}/fixtures/b"], { nested: true }, (err, @files) => done()
    Then -> @files.should.eql [['bar.txt', 'foo.txt'], ['baz.txt', 'quux.txt']]
