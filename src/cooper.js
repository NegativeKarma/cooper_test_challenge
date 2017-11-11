function CooperResponse(attr){
  if(attr.gender == 'female'){
    if(attr.age >= 13 && attr.age <= 14){
      if(attr.completed_distance <= 1500){
        return "Poor";
      }
      if(attr.completed_distance > 1500){
        return "Below Average";
      }
      if(attr.completed_distance >= 1600){
        return "Average";
      }
      if(attr.completed_distance >= 1900){
        return "Above Average";
      }
      if(attr.completed_distance >= 2000){
        return "Excellent";
      }
    }
    if(attr.age >= 15 && attr.age <= 16){
      if(attr.completed_distance <= 1600){
        return "Poor";
      }
      if(attr.completed_distance > 1600){
        return "Below Average";
      }
      if(attr.completed_distance >= 1700){
        return "Average";
      }
      if(attr.completed_distance >= 2000){
        return "Above Average";
      }
      if(attr.completed_distance >= 2100){
        return "Excellent";
      }
    }
    if(attr.age >= 17 && attr.age <= 19){
      if(attr.completed_distance <= 1700){
        return "Poor";
      }
      if(attr.completed_distance > 1700){
        return "Below Average";
      }
      if(attr.completed_distance >= 1800){
        return "Average";
      }
      if(attr.completed_distance >= 2100){
        return "Above Average";
      }
      if(attr.completed_distance >= 2300){
        return "Excellent";
      }
    }
    if(attr.age >= 20 && attr.age <= 29){
      if(attr.completed_distance <= 1500){
        return "Poor";
      }
      if(attr.completed_distance > 1500 && attr.completed_distance <= 1799){
        return "Below Average";
      }
      if(attr.completed_distance >= 1800 && attr.completed_distance <= 2199){
        return "Average";
      }
      if(attr.completed_distance >= 2200 && attr.completed_distance <= 2699){
        return "Above Average";
      }
      if(attr.completed_distance >= 2700){
        return "Excellent";
      }
    }
    if(attr.age >= 30 && attr.age <= 39){
      if(attr.completed_distance <= 1400){
        return "Poor";
      }
      if(attr.completed_distance > 1400){
        return "Below Average";
      }
      if(attr.completed_distance >= 1700){
        return "Average";
      }
      if(attr.completed_distance >= 2000){
        return "Above Average";
      }
      if(attr.completed_distance >= 2500){
        return "Excellent";
      }
    }
    if(attr.age >= 40 && attr.age <= 49){
      if(attr.completed_distance <= 1200){
        return "Poor";
      }
      if(attr.completed_distance > 1200){
        return "Below Average";
      }
      if(attr.completed_distance >= 1500){
        return "Average";
      }
      if(attr.completed_distance >= 1900){
        return "Above Average";
      }
      if(attr.completed_distance >= 2300){
        return "Excellent";
      }
    }
    if(attr.age >= 50){
      if(attr.completed_distance <= 1100){
        return "Poor";
      }
      if(attr.completed_distance > 1100){
        return "Below Average";
      }
      if(attr.completed_distance >= 1400){
        return "Average";
      }
      if(attr.completed_distance >= 1700){
        return "Above Average";
      }
      if(attr.completed_distance >= 2200){
        return "Excellent";
      }
    }
  } else if(attr.gender == 'male'){
    if(attr.age >= 13 && attr.age <= 14){
      if(attr.completed_distance <= 2100){
        return "Poor";
      }
      if(attr.completed_distance > 2100){
        return "Below Average";
      }
      if(attr.completed_distance >= 2200){
        return "Average";
      }
      if(attr.completed_distance >= 2400){
        return "Above Average";
      }
      if(attr.completed_distance >= 2700){
        return "Excellent";
      }
    }
    if(attr.age >= 15 && attr.age <= 16){
      if(obj.completed_distance <= 2200){
        return "Poor";
      }
      if(attr.completed_distance > 2200){
        return "Below Average";
      }
      if(attr.completed_distance >= 2300){
        return "Average";
      }
      if(attr.completed_distance >= 2500){
        return "Above Average";
      }
      if(attr.completed_distance >= 2800){
        return "Excellent";
      }
    }
    if(attr.age >= 17 && attr.age <= 19){
      if(attr.completed_distance <= 2300){
        return "Poor";
      }
      if(attr.completed_distance > 2300){
        return "Below Average";
      }
      if(attr.completed_distance >= 2500){
        return "Average";
      }
      if(attr.completed_distance >= 2700){
        return "Above Average";
      }
      if(attr.completed_distance >= 3000){
        return "Excellent";
      }
    }
    if(attr.age >= 20 && attr.age <= 29){
      if(attr.completed_distance <= 1600){
        return "Poor";
      }
      if(attr.completed_distance > 1600){
        return "Below Average";
      }
      if(attr.completed_distance >= 2200){
        return "Average";
      }
      if(attr.completed_distance >= 2400){
        return "Above Average";
      }
      if(attr.completed_distance >= 2800){
        return "Excellent";
      }
    }
    if(attr.age >= 30 && attr.age <= 39){
      if(attr.completed_distance <= 1500){
        return"Poor";
      }
      if(attr.completed_distance > 1500){
        return"Below Average";
      }
      if(attr.completed_distance >= 1900){
        return "Average";
      }
      if(attr.completed_distance >= 2300){
        return "Above Average";
      }
      if(attr.completed_distance >= 2700){
        return "Excellent";
      }
    }
    if(attr.age >= 40 && attr.age <= 49){
      if(attr.completed_distance <= 1400){
        return "Poor";
      }
      if(attr.completed_distance > 1400){
        return "Below Average";
      }
      if(attr.completed_distance >= 1700){
        return "Average";
      }
      if(attr.completed_distance >= 2100){
        return "Above Average";
      }
      if(attr.completed_distance >= 2500){
        return "Excellent";
      }
    }
    if(attr.age >= 50){
      if(attr.completed_distance <= 1300){
        return "Poor";
      }
      if(attr.completed_distance > 1300){
        return "Below Average";
      }
      if(attr.completed_distance >= 1600){
        return "Average";
      }
      if(attr.completed_distance >= 2000){
        return "Above Average";
      }
      if(attr.completed_distance >= 2400){
        return "Excellent";
      }
    }
  }
}
