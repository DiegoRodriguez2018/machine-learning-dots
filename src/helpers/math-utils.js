// returns a random number (float) from 0 to max
function randomize(max){
  return Math.random() * max;
}

function matrixAdd (arr1,arr2){
  return [arr1[0]+arr2[0],arr1[1]+arr2[1]]
}

function distance (arr1, arr2){
  const deltaX = arr2[0]-arr1[0];
  const deltaY = arr2[1]-arr1[1];
  return Math.sqrt((deltaX)**2+(deltaY)**2);
}

module.exports = {randomize,matrixAdd, distance};