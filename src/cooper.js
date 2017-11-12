/*function TestResult(){}
TestResult.prototype = function(attr) {
  var gender = attr.gender;
  var age = attr.age;
  var completed_distance = attr.completed_distance;
  if ((gender === 'female' || gender === 'male') && age >= 13 && completed_distance > 0){
    CooperResponse(attr);
  }
};*/

function CooperResponse(attr) {
  if (attr.gender == 'female') {
    if (attr.age >= 13 && attr.age <= 14) {
      if (attr.completed_distance <= 1500) {
        return "Poor";
      }
      if (attr.completed_distance > 1500 && attr.completed_distance <= 1599) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1600 && attr.completed_distance <= 1899) {
        return "Average";
      }
      if (attr.completed_distance >= 1900 && attr.completed_distance <= 1999) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2000) {
        return "Excellent";
      }
    }
    if (attr.age >= 15 && attr.age <= 16) {
      if (attr.completed_distance <= 1600) {
        return "Poor";
      }
      if (attr.completed_distance > 1600 && attr.completed_distance <= 1699) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1700 && attr.completed_distance <= 1999) {
        return "Average";
      }
      if (attr.completed_distance >= 2000 && attr.completed_distance <= 2099) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2100) {
        return "Excellent";
      }
    }
    if (attr.age >= 17 && attr.age <= 19) {
      if (attr.completed_distance <= 1700) {
        return "Poor";
      }
      if (attr.completed_distance > 1700 && attr.completed_distance <= 1799) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1800 && attr.completed_distance <= 2099) {
        return "Average";
      }
      if (attr.completed_distance >= 2100 && attr.completed_distance <= 2299) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2300) {
        return "Excellent";
      }
    }
    if (attr.age >= 20 && attr.age <= 29) {
      if (attr.completed_distance <= 1500) {
        return "Poor";
      }
      if (attr.completed_distance > 1500 && attr.completed_distance <= 1799) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1800 && attr.completed_distance <= 2199) {
        return "Average";
      }
      if (attr.completed_distance >= 2200 && attr.completed_distance <= 2699) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2700) {
        return "Excellent";
      }
    }
    if (attr.age >= 30 && attr.age <= 39) {
      if (attr.completed_distance <= 1400) {
        return "Poor";
      }
      if (attr.completed_distance > 1400 && attr.completed_distance <= 1699) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1700 && attr.completed_distance <= 1999) {
        return "Average";
      }
      if (attr.completed_distance >= 2000 && attr.completed_distance <= 2499) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2500) {
        return "Excellent";
      }
    }
    if (attr.age >= 40 && attr.age <= 49) {
      if (attr.completed_distance <= 1200) {
        return "Poor";
      }
      if (attr.completed_distance > 1200 && attr.completed_distance <= 1499) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1500 && attr.completed_distance <= 1899) {
        return "Average";
      }
      if (attr.completed_distance >= 1900 && attr.completed_distance <= 2299) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2300) {
        return "Excellent";
      }
    }
    if (attr.age >= 50) {
      if (attr.completed_distance <= 1100) {
        return "Poor";
      }
      if (attr.completed_distance > 1100 && attr.completed_distance <= 1399) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1400 && attr.completed_distance <= 1699) {
        return "Average";
      }
      if (attr.completed_distance >= 1700 && attr.completed_distance <= 2199) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2200) {
        return "Excellent";
      }
    }
  } else if (attr.gender == 'male') {
    if (attr.age >= 13 && attr.age <= 14) {
      if (attr.completed_distance <= 2100) {
        return "Poor";
      }
      if (attr.completed_distance > 2100 && attr.completed_distance <= 2199) {
        return "Below Average";
      }
      if (attr.completed_distance >= 2200 && attr.completed_distance <= 2399) {
        return "Average";
      }
      if (attr.completed_distance >= 2400 && attr.completed_distance <= 2699) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2700) {
        return "Excellent";
      }
    }
    if (attr.age >= 15 && attr.age <= 16) {
      if (attr.completed_distance <= 2200) {
        return "Poor";
      }
      if (attr.completed_distance > 2200 && attr.completed_distance <= 2299) {
        return "Below Average";
      }
      if (attr.completed_distance >= 2300 && attr.completed_distance <= 2499) {
        return "Average";
      }
      if (attr.completed_distance >= 2500 && attr.completed_distance <= 2799) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2800) {
        return "Excellent";
      }
    }
    if (attr.age >= 17 && attr.age <= 19) {
      if (attr.completed_distance <= 2300) {
        return "Poor";
      }
      if (attr.completed_distance > 2300 && attr.completed_distance <= 2499) {
        return "Below Average";
      }
      if (attr.completed_distance >= 2500 && attr.completed_distance <= 2699) {
        return "Average";
      }
      if (attr.completed_distance >= 2700 && attr.completed_distance <= 2999) {
        return "Above Average";
      }
      if (attr.completed_distance >= 3000) {
        return "Excellent";
      }
    }
    if (attr.age >= 20 && attr.age <= 29) {
      if (attr.completed_distance <= 1600) {
        return "Poor";
      }
      if (attr.completed_distance > 1600 && attr.completed_distance <= 2199) {
        return "Below Average";
      }
      if (attr.completed_distance >= 2200 && attr.completed_distance <= 2399) {
        return "Average";
      }
      if (attr.completed_distance >= 2400 && attr.completed_distance <= 2799) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2800) {
        return "Excellent";
      }
    }
    if (attr.age >= 30 && attr.age <= 39) {
      if (attr.completed_distance <= 1500) {
        return "Poor";
      }
      if (attr.completed_distance > 1500 && attr.completed_distance <= 1899) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1900 && attr.completed_distance <= 2299) {
        return "Average";
      }
      if (attr.completed_distance >= 2300 && attr.completed_distance <= 2699) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2700) {
        return "Excellent";
      }
    }
    if (attr.age >= 40 && attr.age <= 49) {
      if (attr.completed_distance <= 1400) {
        return "Poor";
      }
      if (attr.completed_distance > 1400 && attr.completed_distance <= 1699) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1700 && attr.completed_distance <= 2099) {
        return "Average";
      }
      if (attr.completed_distance >= 2100 && attr.completed_distance <= 2499) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2500) {
        return "Excellent";
      }
    }
    if (attr.age >= 50) {
      if (attr.completed_distance <= 1300) {
        return "Poor";
      }
      if (attr.completed_distance > 1300 && attr.completed_distance <= 1599) {
        return "Below Average";
      }
      if (attr.completed_distance >= 1600 && attr.completed_distance <= 1999) {
        return "Average";
      }
      if (attr.completed_distance >= 2000 && attr.completed_distance <= 2399) {
        return "Above Average";
      }
      if (attr.completed_distance >= 2400) {
        return "Excellent";
      }
    }
  }
}
