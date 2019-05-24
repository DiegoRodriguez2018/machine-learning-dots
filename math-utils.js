// returns a random number (float) from 0 to max
function randomize(max){
  return Math.random() * max;
}

function matrixAdd (arr1,arr2){
  return [arr1[0]+arr2[0],arr1[1]+arr2[1]]
}

module.exports = {randomize,matrixAdd};