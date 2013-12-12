var mocha = require('mocha'),
    expect = require('chai').expect;

var Character = require('../../src/models/character');

describe("Character", function(){
  it("exists", function(){
    expect(Character).to.exist;
  });
});
