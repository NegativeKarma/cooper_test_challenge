function CooperResponse(attr){
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
  });

});
