const MathExpr = require('../lib/index')

describe('#add()', function () {
  var mathexpr

  beforeEach(function () {
    mathexpr = new MathExpr()
  })

  it('should add a single positive value', function () {
    mathexpr
      .add(36)
      .result()
      .should.be.equal(36)
  })

  it('should add a single negative value', function () {
    mathexpr
      .add(-53)
      .result()
      .should.be.equal(-53)
  })
})
