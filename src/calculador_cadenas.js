function calculador(cadena) {
  var res = 0;
  
  if(cadena === "")
  {
    res = 0;
  }
  else if(cadena.search(",") != -1) 
  {
    const cadenaArray = cadena.split(",");
    for(var i = 0; i < cadenaArray.length ; i++)
    {
      res = res + parseInt(cadenaArray[i]);
    }
  } else res = parseInt(cadena);

  return res;
}

export default calculador;
