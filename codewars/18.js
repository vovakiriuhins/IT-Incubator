function past(h, m, s){
    let timeArray = [];
    if (h < 0 || h > 23 || m < 0 || m > 59 || s < 0 || s > 59) {
      return "Please type in existing hours";
    } else {
      timeArray.push(h * 3600000);
      timeArray.push(m * 60000);
      timeArray.push(s * 1000);
    }
    return timeArray.reduce((a, b) => a + b, 0);
  }