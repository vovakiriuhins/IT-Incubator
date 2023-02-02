function fakeBin(x){
    let sum = "";
    
      for (let i = 0; i < x.length; i++) {
        if (x[i] <= 4) sum += "0"
        else sum += "1"
      }
      return sum;
    }