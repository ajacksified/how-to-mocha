var mocha = require('mocha'),
    expect = require('chai').expect;

var Character = require('../../src/models/character');

describe("Character", function(){
  it("exists", function(){
    expect(Character).to.exist;
  });

  it("it is a constructor", function(){
    expect(typeof Character).to.equal('function');
  });

  describe("getting properties", function(){
    it("has a get function", function(){
      expect(Character.prototype.get).to.exist;
      expect(typeof Character.prototype.get).to.equal('function');
    });

    it("returns a value when get is called", function(){
      var character = new Character();
      character.attributes.name = 'Jack';

      expect(character.get('name')).to.equal('Jack');
    });
  });
});

