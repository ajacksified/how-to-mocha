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

  describe("setting values", function() {
    it("has a set function", function() {
      expect(Character.prototype.set).to.exist;
      expect(typeof Character.prototype.set).to.equal('function');
    });

    it("sets a value in attributes when set is called", function(){
      var character = new Character(),
          name = 'Jack';

      character.set('name', name);
      expect(character.attributes.name).to.equal(name);
    });

    it("returns the set value when set is called", function(){
      var character = new Character(),
          name = 'Jack';

      expect(character.set('name', name)).to.equal(name);
    });
  });
});

