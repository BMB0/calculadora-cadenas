function calculador(cadena) {
  var res = 0;
  
  if(cadena === "")
  {
    res = 0;
  }
  else  if(cadena[0] === '/')
  {
    res = getSeparator(cadena);
  } else if(cadena.search(",") != -1 || cadena.search("-") != -1)
  {
    res = splitAdd(cadena, "");
  }else res = parseInt(cadena);

  return res;
}

function getSeparator(cadena)
{
  var cadenaArray;
  cadenaArray = cadena.split(/[[\n ]+/);
  return splitAdd(cadenaArray[2], cadenaArray[1][0]);
}

function splitAdd(cadena, separador)
{
  var res = 0;
  if(separador != "")
  {
    cadena = cadena.replaceAll(separador, ",");
  }
  var cadenaArray = cadena.split(/[[,-]+/);

  for(var i = 0; i < cadenaArray.length ; i++)
  {
    if( parseInt(cadenaArray[i]) < 1000)
    res = res + parseInt(cadenaArray[i]);
  }
  return res;
}

export default calculador;
