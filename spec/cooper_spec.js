describe('CooperResponse', function(){

  it('calculates Cooper test result and returns "Poor"', function(){
    expect(CooperResponse({gender: 'female', age: 22, completed_distance: 1400})).toEqual('Poor');
  });

  it('calculates Cooper test result and returns "Average"', function(){
    expect(CooperResponse({gender: 'female', age: 22, completed_distance: 1900})).toEqual('Average');
  });

  it('calculates Cooper test result and returns "Excellent"', function(){
    expect(CooperResponse({gender: 'male', age: 42, completed_distance: 2500})).toEqual('Excellent');
  });

  it('calculates Cooper test result and returns "Average"', function(){
    expect(CooperResponse({gender: 'male', age: 73, completed_distance: 1721})).toEqual('Average');
  });

  it('calculates Cooper test result and returns "Above Average"', function(){
    expect(CooperResponse({gender: 'male', age: 15, completed_distance: 2628})).toEqual('Above Average');
  });

});
