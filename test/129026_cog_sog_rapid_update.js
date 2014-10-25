var chai = require("chai");
chai.Should();
chai.use(require('chai-things'));


describe('129026 COG & SOG, Rapid Update', function () {
  it('complete sentence converts', function () {
    var msgs = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2014-08-15-18:00:10.005","prio":"2","src":"160","dst":"255","pgn":"129026","description":"COG & SOG, Rapid Update","fields":{"COG Reference":"True","COG":"206.1","SOG":"3.65"}}'));
    msgs.length.should.equal(2);
    msgs.should.contain.an.item.with.deep.property('navigation.courseOverGroundTrue');
    msgs.should.contain.an.item.with.deep.property('navigation.courseOverGroundTrue.value', 206.1);
    msgs.should.contain.an.item.with.deep.property('navigation.speedOverGround');
    msgs.should.contain.an.item.with.deep.property('navigation.speedOverGround.value', 3.65);
  });
});


