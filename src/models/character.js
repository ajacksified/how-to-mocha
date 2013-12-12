Character = function(){
  this.attributes = {};
};

Character.prototype.get = function(attr) {
  return this.attributes[attr];
};

module.exports = Character;

