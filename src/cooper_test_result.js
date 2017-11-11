function CooperResponse(obj){
  if(obj.gender == 'female'){
    if(obj.age >= 13 && obj.age <= 14){
      if(obj.completed_distance <= 1500){
        return "Poor";
      }
      if(obj.completed_distance > 1500){
        return "Below Average";
      }
      if(obj.completed_distance >= 1600){
        return "Average";
      }
      if(obj.completed_distance >= 1900){
        return "Above Average";
      }
      if(obj.completed_distance >= 2000){
        return "Excellent";
      }
    }
    if(obj.age >= 15 && obj.age <= 16){
      if(obj.completed_distance <= 1600){
        return "Poor";
      }
      if(obj.completed_distance > 1600){
        return "Below Average";
      }
      if(obj.completed_distance >= 1700){
        return "Average";
      }
      if(obj.completed_distance >= 2000){
        return "Above Average";
      }
      if(obj.completed_distance >= 2100){
        return "Excellent";
      }
    }
    if(obj.age >= 17 && obj.age <= 19){
      if(obj.completed_distance <= 1700){
        return "Poor";
      }
      if(obj.completed_distance > 1700){
        return "Below Average";
      }
      if(obj.completed_distance >= 1800){
        return "Average";
      }
      if(obj.completed_distance >= 2100){
        return "Above Average";
      }
      if(obj.completed_distance >= 2300){
        return "Excellent";
      }
    }
    if(obj.age >= 20 && obj.age <= 29){
      if(obj.completed_distance <= 1500){
        return "Poor";
      }
      if(obj.completed_distance > 1500){
        return "Below Average";
      }
      if(obj.completed_distance >= 1800){
        return "Average";
      }
      if(obj.completed_distance >= 2200){
        return "Above Average";
      }
      if(obj.completed_distance >= 2700){
        return "Excellent";
      }
    }
    if(obj.age >= 30 && obj.age <= 39){
      if(obj.completed_distance <= 1400){
        return "Poor";
      }
      if(obj.completed_distance > 1400){
        return "Below Average";
      }
      if(obj.completed_distance >= 1700){
        return "Average";
      }
      if(obj.completed_distance >= 2000){
        return "Above Average";
      }
      if(obj.completed_distance >= 2500){
        return "Excellent";
      }
    }
    if(obj.age >= 40 && obj.age <= 49){
      if(obj.completed_distance <= 1200){
        return "Poor";
      }
      if(obj.completed_distance > 1200){
        return "Below Average";
      }
      if(obj.completed_distance >= 1500){
        return "Average";
      }
      if(obj.completed_distance >= 1900){
        return "Above Average";
      }
      if(obj.completed_distance >= 2300){
        return "Excellent";
      }
    }
    if(obj.age >= 50){
      if(obj.completed_distance <= 1100){
        return "Poor";
      }
      if(obj.completed_distance > 1100){
        return "Below Average";
      }
      if(obj.completed_distance >= 1400){
        return "Average";
      }
      if(obj.completed_distance >= 1700){
        return "Above Average";
      }
      if(obj.completed_distance >= 2200){
        return "Excellent";
      }
    }
  } else if(obj.gender == 'male'){
    if(obj.age >= 13 && obj.age <= 14){
      if(obj.completed_distance <= 2100){
        return "Poor";
      }
      if(obj.completed_distance > 2100){
        return "Below Average";
      }
      if(obj.completed_distance >= 2200){
        return "Average";
      }
      if(obj.completed_distance >= 2400){
        return "Above Average";
      }
      if(obj.completed_distance >= 2700){
        return "Excellent";
      }
    }
    if(obj.age >= 15 && obj.age <= 16){
      if(obj.completed_distance <= 2200){
        return "Poor";
      }
      if(obj.completed_distance > 2200){
        return "Below Average";
      }
      if(obj.completed_distance >= 2300){
        return "Average";
      }
      if(obj.completed_distance >= 2500){
        return "Above Average";
      }
      if(obj.completed_distance >= 2800){
        return "Excellent";
      }
    }
    if(obj.age >= 17 && obj.age <= 19){
      if(obj.completed_distance <= 2300){
        return "Poor";
      }
      if(obj.completed_distance > 2300){
        return "Below Average";
      }
      if(obj.completed_distance >= 2500){
        return "Average";
      }
      if(obj.completed_distance >= 2700){
        return "Above Average";
      }
      if(obj.completed_distance >= 3000){
        return "Excellent";
      }
    }
    if(obj.age >= 20 && obj.age <= 29){
      if(obj.completed_distance <= 1600){
        return "Poor";
      }
      if(obj.completed_distance > 1600){
        return "Below Average";
      }
      if(obj.completed_distance >= 2200){
        return "Average";
      }
      if(obj.completed_distance >= 2400){
        return "Above Average";
      }
      if(obj.completed_distance >= 2800){
        return "Excellent";
      }
    }
    if(obj.age >= 30 && obj.age <= 39){
      if(obj.completed_distance <= 1500){
        return"Poor";
      }
      if(obj.completed_distance > 1500){
        return"Below Average";
      }
      if(obj.completed_distance >= 1900){
        return "Average";
      }
      if(obj.completed_distance >= 2300){
        return "Above Average";
      }
      if(obj.completed_distance >= 2700){
        return "Excellent";
      }
    }
    if(obj.age >= 40 && obj.age <= 49){
      if(obj.completed_distance <= 1400){
        return "Poor";
      }
      if(obj.completed_distance > 1400){
        return "Below Average";
      }
      if(obj.completed_distance >= 1700){
        return "Average";
      }
      if(obj.completed_distance >= 2100){
        return "Above Average";
      }
      if(obj.completed_distance >= 2500){
        return "Excellent";
      }
    }
    if(obj.age >= 50){
      if(obj.completed_distance <= 1300){
        return "Poor";
      }
      if(obj.completed_distance > 1300){
        return "Below Average";
      }
      if(obj.completed_distance >= 1600){
        return "Average";
      }
      if(obj.completed_distance >= 2000){
        return "Above Average";
      }
      if(obj.completed_distance >= 2400){
        return "Excellent";
      }
    }
  }
}
