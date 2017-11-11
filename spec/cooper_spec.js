/*function CooperResponse(attr){
  this.gender = attr.gender;
  this.age = attr.age;
  this.completed_distance = attr.completed_distance;
}

  beforeEach(function(){
    athlete = new Athlete({
      gender: 'female',
      age: 22,
      completed_distance: 2500,
    });
    result = new CooperResult();
  });

  it('calculates Cooper test result and returns "above average"', function() {
    result.metric_bmi(athlete);
    expect(person.bmiValue).toEqual('above average');
  })

});*/
/*describe('CooperResponse', function(attr){

  var athlete;

  beforeEach(function(){
    athlete = new CooperResponse;
    gender: 'female';
    age: 22;
    completed_distance: 2250
  })*/
describe('CooperResponse', function(){

  it('calculates Cooper test result and returns "Poor"', function(){
    expect(CooperResponse({gender: 'female', age: 22, completed_distance: 1400})).toEqual('Poor');
  });

  it('calculates Cooper test result and returns "Average"', function(){
    expect(CooperResponse({gender: 'female', age: 22, completed_distance: 1900})).toEqual('Average');
  });

});
  /*it("returns a correct assessment on a calculation", function(){
    expect(CooperResponse({gender: 'male', age: 42, completed_distance: 2500})).toEqual("Excellent");
  });

  it('calculates Cooper test result and returns "above average"', function() {
    expect(athlete.CooperResponse).toEqual('above average');
  });

});*/
