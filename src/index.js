module.exports = function check(str, bracketsConfig) {
  // your solution
  config = {};
  for (let i = 0; i < bracketsConfig.length;) {
    //создаем объект ключ:значение
    let elem = bracketsConfig[i];
    let openBr = elem[0];
    config[openBr] = elem[1];
    i++
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let set = str.charAt(i);
    let prev = str.charAt(i-1);
    let last = stack[stack.length-1];
    //если текущий элемент из строки равен последнему в стеке
    //и равен "закрывающей скобке", то удаляем из стека
    if (set in config && config[set] == set && set == last) {
      stack.pop(last);
    }
    //если элемент и открывает и закрывает, то добавляем в стек
    else if (set in config && config[set] == set) {
      stack.push(set);
    }
    //если элемент открывает но не закрывает, то добавляем в стек
    else if (set in config && config[set] != set) {
      stack.push(set);
    }
    //если элемент эакрывает, то удаляем из стека
    else if (set == config[last]) {
      stack.pop(last);
    }
    //если элемент не в объекте и длина стека 0
    else if (stack.length == 0 && config[set] ==  undefined) {
      console.time();
      return false;
    }
    else {
      console.time();
    }
  }
  if (stack.length == 0) {
    console.time();
    return true;
  }
  else {
    console.time();
    return false;
  }
}

