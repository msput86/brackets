module.exports = function check(str, bracketsConfig) {
  let arrOpenStack = [];
  for (var i in str) {
    let c = str[i];
    let clIndex = getCloseBrIndex(bracketsConfig, c);
    let opIndex = getOpenBrIndex(bracketsConfig, c);
    if ((clIndex != -1) && (opIndex != -1)) {
      if (clIndex == opIndex) {
        if (getLastItem(arrOpenStack) == clIndex) {
          arrOpenStack.pop();
        } else {
          arrOpenStack.push(opIndex);
        }
      } else {
        if (clIndex != -1) {
          if (getLastItem(arrOpenStack) == clIndex) {
            arrOpenStack.pop();
          } else {
            return false;
          }
        } else if (opIndex != -1) {
          arrOpenStack.push(opIndex);
        }
      }
    } else {
      if (clIndex != -1) {
        if (getLastItem(arrOpenStack) == clIndex) {
          arrOpenStack.pop();
        } else {
          return false;
        }
      } else if (opIndex != -1) {
        arrOpenStack.push(opIndex);
      }
    }
  }
  return arrOpenStack.length > 0 ? false : true;



}
function getOpenBrIndex(bracketsConfig, symbol) {
  return bracketsConfig.findIndex(brArr => {
    return brArr[0] == symbol;
  })
}
function getCloseBrIndex(bracketsConfig, symbol) {
  return bracketsConfig.findIndex(brArr => {
    return brArr[1] == symbol;
  })
}
function getLastItem(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  } else return -1;
}
