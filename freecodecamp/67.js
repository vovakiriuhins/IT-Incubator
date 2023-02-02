const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

if (strokes < 2) {
return "Hole-in-one!";
} else if (par == par && strokes <= par-2) {
return "Eagle";
} else if (par == par && strokes <= par-1) {
return "Birdie";
} else if (par == par && strokes === par) {
return "Par";
} else if (par == par && strokes === par+1) {
return "Bogey";
} else if (par == par && strokes === par+2) {
return "Double Bogey";
} else if (par == par && strokes >= par+3) {
return "Go Home!";
} 
  return "Change Me";
}

golfScore(5, 4);