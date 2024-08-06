module.exports = function check(str, bracketsConfig) {
  let condition = ''
  for (i = 0; i < bracketsConfig.length; i++ ) {
    if (isNaN(+bracketsConfig[i][0])){  
      condition += `\\${bracketsConfig[i][0]}\\${bracketsConfig[i][1]}|`
    }
    else {
      condition += `${bracketsConfig[i][0]}${bracketsConfig[i][1]}|`
    }
  }
  condition = condition.substring(0, condition.length - 1)

  let result = str.replace(RegExp(condition, 'g'),'');
   
    while (result !== result.replace(RegExp(condition, 'g'),'')) {
    result = result.replace(RegExp(condition, 'g'),'')
    } 
    if (result === '') return true;
    else return false;
}
