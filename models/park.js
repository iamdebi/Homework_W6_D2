const Park = function(name, ticketPrice, dinosaurs = []) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
};

// Add a dinosaur to its collection of dinosaurs
Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

// Remove a dinosaur from its collection of dinosaurs
Park.prototype.removeDinosaur = function(dinosaur) {
  dinosaurIndex = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(dinosaurIndex, 1);
};
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year

Park.prototype.module.exports = Park;
