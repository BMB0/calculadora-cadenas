function calculador(cadena) {
  var res = 0;
  
  if(cadena === "")
  {
    res = 0;
  }
  else if(cadena.search(",") != -1 || cadena.search("-") != -1) 
  {
    res = splitAdd(cadena, "");
  } else if(cadena[0 ]=== "/")
  {
    res = get_separator(cadena);
  }else res = parseInt(cadena);

  return res;
}
function get_separator(cadena)
{
  var cadenaArray;
  cadenaArray = cadena.split(/[[\n ]+/);
  return splitAdd(cadenaArray[2], cadenaArray[1].slice(0,-1));
}
function splitAdd(cadena, separador)
{
  var res = 0;
  var cadenaArray;
  if(separador === "")
  {
    cadenaArray = cadena.split(/[,-]+/);
  }else cadenaArray = cadena.replaceAll(separador, ',').split(/[,-]+/);
  
    for(var i = 0; i < cadenaArray.length ; i++)
    {
      res = res + parseInt(cadenaArray[i]);
    }
    return res;
}

export default calculador;
