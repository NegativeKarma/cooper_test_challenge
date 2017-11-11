function Athlete(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.completed_distance = attr.completed_distance;
}
Athlete.prototype.get_test_result = function() {
  calculator = new TestResult();
};
