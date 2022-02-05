function countPositivesSumNegatives(input) {
    if(!input || !input.length) return [];
    let a = 0, b = 0;
    input.forEach(atem => {
      if(atem > 0) {
        a++;
      } else {
          b += atem;
      }
      });
    
      return [a, b];
  }
