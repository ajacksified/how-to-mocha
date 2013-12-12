Character = function(){
  this.attributes = {};
};

Character.prototype.get = function(attr) {
  return this.attributes[attr];
};

Character.prototype.set = function(attr, val) {
  this.attributes[attr] = val;
  return val;
};

module.exports = Character;

