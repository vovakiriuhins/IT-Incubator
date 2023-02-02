function countPositivesSumNegatives(input) {
    let positive = 0;
    let negative = 0;
  
      for(let i = 0; i < input.length; i++) {
          if(input[i] <= -1) {
              negative += input[i];
        } else if (input[i] >= 1){
              positive++;
        }
      }
      return [positive, negative];
    }
  