/**
 *
 * @namespace faker.elections
 */
var Election = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */
  self.elections = function () {
    return fake('{{elections.candidates}} {{elections.party}} {{elections.symbol}} {{elections.constituency}}');
  };

//   self.elections.schema = {
//     "description": "Generates a random  candidate daya.",
//     "sampleResults": ["BMW Explorer", "Ford Camry", "Lamborghini Ranchero"]
//   };

  self.candidate = function () {
    return faker.random.arrayElement(faker.definitions.elections.candidate);

  };
//   self.candidate.schema = {
//     "description": "Generates a candidate name.",
//     "sampleResults": ["Ford", "Jeep", "Tesla"]
//   };

  self.party = function () {
    return faker.random.arrayElement(faker.definitions.elections.party);
  };
//   self.party.schema = {
//     "description": "Generates a party name.",
//     "sampleResults": ["Ford", "Jeep", "Tesla"]
//   };

  self.symbol = function () {
    return faker.random.arrayElement(faker.definitions.elections.symbol);
  };
//   self.symbol.schema = {
//     "description": "Generates a symbol name.",
//     "sampleResults": ["Ford", "Jeep", "Tesla"]
//   };
  self.constituency = function () {
    return faker.random.arrayElement(faker.definitions.elections.constituency);
  };
//   self.constituency.schema = {
//     "description": "Generates a manufacturer name.",
//     "sampleResults": ["Ford", "Jeep", "Tesla"]
//   };

  return self;
};
  module["exports"] = Election;