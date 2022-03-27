function calculador(cadena) {
  var res = 0;

  if (cadena === "") {
    res = 0;
  } else if (cadena[0] === '/') {
    res = separadorFormatter(cadena);
  } else if (cadena.search(",") != -1 || cadena.search("-") != -1) {
    res = splitAdd(cadena);
  } else res = parseInt(cadena);

  return res;
}

function separadorFormatter(cadena) {
  var cadenaArray = cadena.split(/[[\s]+/);
  var num = cadenaArray.length - 1;
  for (var i = 1; i < cadenaArray.length - 1; i++) {
    cadenaArray[num] = cadenaArray[num].replaceAll(cadenaArray[i].slice(0, -1), ",");
  }
  return splitAdd(cadenaArray[num]);
}

function splitAdd(cadena) {
  var res = 0;
  var cadenaArray = cadena.split(/[,-]+/);
  for (var i = 0; i < cadenaArray.length; i++) {
    if (parseInt(cadenaArray[i]) <= 1000)
      res = res + parseInt(cadenaArray[i]);
  }
  return res;
}

export default calculador;