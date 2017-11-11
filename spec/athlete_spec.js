describe('Athlete', function(){
  var athlete;

  beforeEach(function(){
    athlete = new Athlete({
      gender: 'female',
      age: 22,
      completed_distance: 2500,
    });
  });

  it('should have a female gender', function(){
    expect(athlete.gender).toEqual('female');
  });

  it('should have an age of 22', function(){
    expect(athlete.age).toEqual(22);
  });

  it('should have a completed distance of 2500', function(){
    expect(athlete.completed_distance).toEqual(2500);
  });

});
